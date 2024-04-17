$fields = $web.Fields;
$context.Load($fields);
$context.ExecuteQuery();


#[guid]::NewGuid()
$fieldsArray = @();

#Indexed="True"
$fieldsArray += '<Field ID="{2dbb64cc-4d8e-44ef-8544-0d49705bfad5}" 
                Name="Campaña_ID"
                DisplayName="ID de la campaña" 
                Type="Text"
                Required="TRUE"
                Unique="TRUE"
                Indexed="False"
                Group="FichaCampaña" 
                xmlns="http://schemas.microsoft.com/sharepoint/">
                </Field>';

$fieldsArray += '<Field ID="{61808313-fe99-4abe-90a0-2c080db1bdea}" 
                Name="Campaña_Descripcion"
                DisplayName="Descripcion de la campaña" 
                Type="Text" 
                Group="FichaCampaña" 
                xmlns="http://schemas.microsoft.com/sharepoint/">
                </Field>';

$fieldsArray += '<Field ID="{469ae8bf-2dfa-4bfd-b189-361b7afb6dda}" 
                Name="Campaña_Fecha" 
                DisplayName="Fecha proxima sesión" 
                Type="Date"
                Group="FichaCampaña" 
                xmlns="http://schemas.microsoft.com/sharepoint/">
                </Field>';

$fieldsArray += '<Field ID="{2eeecf0b-1dbb-46cd-b355-1c69b6140b5f}" 
                Name="Campaña_Foto" 
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
