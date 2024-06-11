$fields = $context.Web.Fields;
$contentTypes = $context.Web.ContentTypes;
$context.load($fields)
$context.load($contentTypes);
$context.ExecuteQuery();

$currentPath = (Get-Location).Path

write-host "ELIMINAR COLUMNAS DE SITIO, TIPOS DE CONTENIDO Y LISTAS"

invoke-expression -Command "$currentPath\PersonajeArma\PersonajeArma_Borrar1_Lista.ps1"
invoke-expression -Command "$currentPath\PersonajeArma\PersonajeArma_Borrar2_Content.ps1"
invoke-expression -Command "$currentPath\PersonajeArma\PersonajeArma_Borrar3_Columns.ps1"

invoke-expression -Command "$currentPath\Personaje\Personaje_Borrar1_Lista.ps1"
invoke-expression -Command "$currentPath\Personaje\Personaje_Borrar2_Content.ps1"
invoke-expression -Command "$currentPath\Personaje\Personaje_Borrar3_Columns.ps1"

invoke-expression -Command "$currentPath\Campaña\Campaña_Borrar1_Lista.ps1"
invoke-expression -Command "$currentPath\Campaña\Campaña_Borrar2_Content.ps1"
invoke-expression -Command "$currentPath\Campaña\Campaña_Borrar3_Columns.ps1"

invoke-expression -Command "$currentPath\Armas\Armas_Borrar1_Lista.ps1"
invoke-expression -Command "$currentPath\Armas\Armas_Borrar2_Content.ps1"
invoke-expression -Command "$currentPath\Armas\Armas_Borrar3_Columns.ps1"

invoke-expression -Command "$currentPath\Armas_Imagen\ArmaFoto_Borrar1_Lista.ps1"
invoke-expression -Command "$currentPath\Armas_Imagen\ArmaFoto_Borrar2_Content.ps1"
invoke-expression -Command "$currentPath\Armas_Imagen\ArmaFoto_Borrar3_Columns.ps1"



