# root /**/*/build;

index index.html;

rewrite ^(.+)\/$
         $1
         permanent;

error_page 404
           /error_page.html;
error_page 403
           /error_page.html;
error_page 500 502 503 504
           /error_page.html;

location ~ ^\/(.+)$ {
    try_files $uri
              $uri.html
              = 404;
}

location ^~ /(assets|_app\/immutable\/assets)/ {
    brotli_static on;
    gzip_static on;
    access_log off;
    add_header "Cache-Control" public;
    add_header Vary "Accept-Encoding";
}
