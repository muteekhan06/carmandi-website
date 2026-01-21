$iconsDir = "c:\CarMandi Website\carmandi-website\public\icons"

$logos = @{
    "toyota.svg" = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><ellipse cx="50" cy="50" rx="45" ry="30" fill="none" stroke="#EB1010" stroke-width="5"/><ellipse cx="50" cy="38" rx="30" ry="10" fill="none" stroke="#EB1010" stroke-width="5"/><path d="M50 38 V80" stroke="#EB1010" stroke-width="5"/></svg>'
    "honda.svg" = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect x="10" y="10" width="80" height="80" rx="15" fill="none" stroke="#999" stroke-width="5"/><path d="M25 25 V75 M75 25 V75 M25 50 H75" stroke="#000" stroke-width="8" stroke-linecap="round"/></svg>'
    "suzuki.svg" = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M25 30 H70 L30 70 H75" stroke="#E30613" stroke-width="10" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>'
    "hyundai.svg" = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><ellipse cx="50" cy="50" rx="45" ry="30" fill="none" stroke="#002C5F" stroke-width="4"/><path d="M35 30 V70 M65 30 V70 M35 50 H65" stroke="#002C5F" stroke-width="6" stroke-linecap="round" transform="skewX(-10) translate(10,0)"/></svg>'
    "kia.svg" = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 60"><text x="50" y="45" font-family="Arial, sans-serif" font-weight="bold" font-size="40" text-anchor="middle" fill="#000">KIA</text></svg>'
    "mg.svg" = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M30 20 L70 20 L85 50 L70 80 L30 80 L15 50 Z" fill="none" stroke="#B11919" stroke-width="5"/><text x="50" y="60" font-family="Arial, sans-serif" font-weight="bold" font-size="30" text-anchor="middle" fill="#B11919">MG</text></svg>'
    "audi.svg" = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 60"><circle cx="30" cy="30" r="20" fill="none" stroke="#000" stroke-width="4"/><circle cx="60" cy="30" r="20" fill="none" stroke="#000" stroke-width="4"/><circle cx="90" cy="30" r="20" fill="none" stroke="#000" stroke-width="4"/><circle cx="120" cy="30" r="20" fill="none" stroke="#000" stroke-width="4"/></svg>'
    "bmw.svg" = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="45" fill="#333"/><circle cx="50" cy="50" r="30" fill="#FFF"/><path d="M50 50 L50 20 A30 30 0 0 1 80 50 Z" fill="#008AC9"/><path d="M50 50 L50 80 A30 30 0 0 1 20 50 Z" fill="#008AC9"/><text x="50" y="18" font-family="Arial" font-weight="bold" font-size="12" fill="#FFF" text-anchor="middle">BMW</text></svg>'
    "mercedes.svg" = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="45" fill="none" stroke="#888" stroke-width="3"/><path d="M50 10 L65 55 L25 80 L50 50 L75 80 L35 55 Z" fill="#888"/></svg>'
    "changan.svg" = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="45" fill="none" stroke="#0066B3" stroke-width="5"/><path d="M30 30 L50 70 L70 30" fill="none" stroke="#0066B3" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/></svg>'
    "daihatsu.svg" = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M20 20 H70 Q90 50 70 80 H20 Z" fill="#D40000"/><text x="45" y="65" font-family="Arial" font-weight="bold" font-size="50" fill="#FFF">D</text></svg>'
    "nissan.svg" = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="none" stroke="#999" stroke-width="8"/><rect x="10" y="40" width="80" height="20" fill="#999"/><text x="50" y="55" font-family="Arial" font-weight="bold" font-size="14" fill="#FFF" text-anchor="middle" letter-spacing="2">NISSAN</text></svg>'
}

foreach ($key in $logos.Keys) {
    $path = Join-Path $iconsDir $key
    Set-Content -Path $path -Value $logos[$key]
    Write-Host "Created $path"
}
