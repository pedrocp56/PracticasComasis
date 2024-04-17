$fields = $web.Fields;
$context.Load($fields);
$context.ExecuteQuery();


#[guid]::NewGuid()
$fieldsArray = @();

#Indexed="True"

$fieldsArray += '<Field ID="{e124309c-a8fc-4cbc-b705-8a9351bdd485}" 
                Name="Usuario_Estado"
                DisplayName="Estado" 
                Type="Text" 
                Group="FichaUsuario" 
                xmlns="http://schemas.microsoft.com/sharepoint/">
                </Field>';

$fieldsArray += '<Field ID="{5d3659d5-e96e-4402-bdcf-8a8c0cc62d04}" 
                Name="Usuario_Foto" 
                DisplayName="Foto del Usuario"  
                Type="URL" 
                Format="Image"
                Group="FichaUsuario" 
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
