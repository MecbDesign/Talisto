# Servidor web simple en PowerShell
$port = 8000
$root = Get-Location

Write-Host "Servidor web iniciado en http://localhost:$port"
Write-Host "Presiona Ctrl+C para detener el servidor"
Write-Host ""

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")
$listener.Start()

try {
    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response
        
        $url = $request.Url.LocalPath
        if ($url -eq "/") {
            $url = "/index.html"
        }
        
        $filePath = Join-Path $root $url.TrimStart("/")
        
        if (Test-Path $filePath -PathType Leaf) {
            $content = [System.IO.File]::ReadAllBytes($filePath)
            $response.ContentLength64 = $content.Length
            
            # Determinar el tipo MIME basado en la extensión
            $extension = [System.IO.Path]::GetExtension($filePath).ToLower()
            switch ($extension) {
                ".html" { $response.ContentType = "text/html" }
                ".css" { $response.ContentType = "text/css" }
                ".js" { $response.ContentType = "application/javascript" }
                ".json" { $response.ContentType = "application/json" }
                ".png" { $response.ContentType = "image/png" }
                ".jpg" { $response.ContentType = "image/jpeg" }
                ".jpeg" { $response.ContentType = "image/jpeg" }
                ".gif" { $response.ContentType = "image/gif" }
                ".svg" { $response.ContentType = "image/svg+xml" }
                default { $response.ContentType = "application/octet-stream" }
            }
            
            $response.OutputStream.Write($content, 0, $content.Length)
            Write-Host "200 - $url"
        } else {
            $response.StatusCode = 404
            $notFoundContent = "404 - Archivo no encontrado: $url"
            $content = [System.Text.Encoding]::UTF8.GetBytes($notFoundContent)
            $response.ContentLength64 = $content.Length
            $response.ContentType = "text/plain"
            $response.OutputStream.Write($content, 0, $content.Length)
            Write-Host "404 - $url"
        }
        
        $response.Close()
    }
} finally {
    $listener.Stop()
    Write-Host "Servidor detenido"
} 