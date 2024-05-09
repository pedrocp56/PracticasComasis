$fields = $web.Fields;
$context.Load($fields);
$context.ExecuteQuery();


#[guid]::NewGuid()
$fieldsArray = @();

#Indexed="True"

$fieldsArray += '<Field ID="{e1e12a32-5ca9-4ee6-8df0-a2c75b68032f}" 
                Name="Campanha_Descripcion"
                DisplayName="Descripcion de la campaña" 
                Type="Note" 
                Group="FichaCampaña" 
                xmlns="http://schemas.microsoft.com/sharepoint/">
                </Field>';

$fieldsArray += '<Field ID="{9a1f7e3e-71c5-44bd-aa78-e5e334867dae}" 
                Name="Campanha_Fecha" 
                DisplayName="Fecha proxima sesión" 
                Type="DateTime"
                Group="FichaCampaña" 
                xmlns="http://schemas.microsoft.com/sharepoint/">
                </Field>';

$fieldsArray += '<Field ID="{a66cb79d-3de8-425e-a0fa-1f639f954549}" 
                Name="Campanha_Foto" 
                DisplayName="Foto de la campaña"  
                Type="URL" 
                Format="Image"
                Group="FichaCampaña" 
                xmlns="http://schemas.microsoft.com/sharepoint/">
                </Field>';



$fieldOption = [Microsoft.SharePoint.Client.AddFieldOptions]::DefaultValue;

foreach ($xml in $fieldsArray) {

    write-host $xml
    $field = $fields.AddFieldAsXml($xml, $true, $fieldOption); 
    $context.Load($field);
    $context.ExecuteQuery();
}


write-host "columnas ok" -ForegroundColor Green
