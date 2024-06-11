$fields = $context.Web.Fields;
$contentTypes = $context.Web.ContentTypes;
$context.load($fields)
$context.load($contentTypes);
$context.ExecuteQuery();

$currentPath = (Get-Location).Path

write-host "AÑADIR COLUMNAS DE SITIO, TIPOS DE CONTENIDO Y LISTAS"

invoke-expression -Command "$currentPath\Armas_Imagen\ArmaFoto_SiteColumns.ps1"
invoke-expression -Command "$currentPath\Armas_Imagen\ArmaFoto_ContentTypes.ps1"
invoke-expression -Command "$currentPath\Armas_Imagen\ArmaFoto_List.ps1"

invoke-expression -Command "$currentPath\Armas\Armas_SiteColumns.ps1"
invoke-expression -Command "$currentPath\Armas\Armas_ContentTypes.ps1"
invoke-expression -Command "$currentPath\Armas\Armas_List.ps1"

invoke-expression -Command "$currentPath\Campaña\Campaña_SiteColumns.ps1"
invoke-expression -Command "$currentPath\Campaña\Campaña_ContentTypes.ps1"
invoke-expression -Command "$currentPath\Campaña\Campaña_List.ps1"

invoke-expression -Command "$currentPath\Personaje\Personaje_SiteColumns.ps1"
invoke-expression -Command "$currentPath\Personaje\Personaje_ContentTypes.ps1"
invoke-expression -Command "$currentPath\Personaje\Personaje_List.ps1"

invoke-expression -Command "$currentPath\PersonajeArma\PersonajeArma_SiteColumns.ps1"
invoke-expression -Command "$currentPath\PersonajeArma\PersonajeArma_ContentTypes.ps1"
invoke-expression -Command "$currentPath\PersonajeArma\PersonajeArma_List.ps1"
