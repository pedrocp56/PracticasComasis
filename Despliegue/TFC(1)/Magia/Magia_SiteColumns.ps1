$fields = $web.Fields;
$context.Load($fields);
$context.ExecuteQuery();


#[guid]::NewGuid()
$fieldsArray = @();

$fieldsArray += '<Field ID="{44f3b0d9-1fd2-487b-bf70-83fd9a8579aa}" 
                Name="Magia_Cantidad"
                DisplayName="Cantidad de magia" 
                Type="Note" 
                Multiline="True"
                Required="TRUE"
                Indexed="False"
                Group="FichaMagia" 
                xmlns="http://schemas.microsoft.com/sharepoint/">
                </Field>';

$fieldsArray += '<Field ID="{f5510ff2-dbbd-4111-ad79-8eaff32f8978}" 
                Name="Magia_Hechizos"
                DisplayName="Hechizos disponibles" 
                Type="Note" 
                Multiline="True"
                Required="True"
                Indexed="FALSE"
                Group="FichaMagia" 
                xmlns="http://schemas.microsoft.com/sharepoint/">
                </Field>';
                
$fieldsArray += '<Field ID="{0cad6e58-5f7c-44cb-a44e-9338d938fa4a}" 
                Name="Magia_Recuperacion"
                DisplayName="Cuando recuperas la magia" 
                Type="Choice" 
                Required="True"
                Indexed="FALSE"
                Group="FichaMagia" 
                xmlns="http://schemas.microsoft.com/sharepoint/">
                <CHOICES>
                <CHOICE>Descanso largo</CHOICE>
                <CHOICE>Descanso corto</CHOICE>
                </CHOICES>
                </Field>';


$fieldOption = [Microsoft.SharePoint.Client.AddFieldOptions]::DefaultValue;

foreach ($xml in $fieldsArray) {

    write-host $xml
    $field = $fields.AddFieldAsXml($xml, $true, $fieldOption); 
    $context.Load($field);
    $context.ExecuteQuery();
}


write-host "columnas ok" -ForegroundColor Green
