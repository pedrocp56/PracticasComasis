$fields = $web.Fields;
$context.Load($fields);
$context.ExecuteQuery();


#[guid]::NewGuid()
$fieldsArray = @();

#Indexed="True"

$fieldsArray += '<Field ID="{07e1d78b-1b11-4f50-87be-b189117859b7}" 
                Name="Competencia"
                DisplayName="Competencia" 
                Type="Boolean"
                Group="PersoanjeArma" 
                xmlns="http://schemas.microsoft.com/sharepoint/">
                </Field>';

$fieldsArray += '<Field ID="{2e87fc3f-0838-40b0-a970-3c24f08b54d3}" 
                Name="Bonificacion_Adiccional"
                DisplayName="Bonificacion adiccional" 
                Type="Number"
                Required="TRUE"
                Indexed="FALSE"
                Group="PersoanjeArma" 
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
