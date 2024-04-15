$fields = $web.Fields;
$context.Load($fields);
$context.ExecuteQuery();


#[guid]::NewGuid()
$fieldsArray = @();

$fieldsArray += '<Field ID="{2dbb64cc-4d8e-44ef-8544-0d49705bfad5}" 
                Name="Arma_Nombre"
                DisplayName="Nombre del arma" 
                Type="Text"
                Required="TRUE"
                Indexed="False"
                Group="FichaArma" 
                xmlns="http://schemas.microsoft.com/sharepoint/">
                </Field>';

$fieldsArray += '<Field ID="{895e4672-e15b-4c40-bc6f-d752e02dbbd9}" 
                Name="Arma_Ataque"
                DisplayName="Ataque del arma" 
                Type="Number"
                Indexed="FALSE"
                Group="FichaArma" 
                xmlns="http://schemas.microsoft.com/sharepoint/">
                </Field>';


$fieldsArray += '<Field ID="{61808313-fe99-4abe-90a0-2c080db1bdea}" 
                Name="Arma_Daño"
                DisplayName="Daño del arma" 
                Type="Text" 
                Required="TRUE"
                Group="FichaArma" 
                xmlns="http://schemas.microsoft.com/sharepoint/">
                </Field>';

$fieldsArray += '<Field ID="{469ae8bf-2dfa-4bfd-b189-361b7afb6dda}" 
                Name="Arma_Tipo" 
                DisplayName="Tipo de daño" 
                Type="Text"
                Required="TRUE"
                Group="FichaArma" 
                xmlns="http://schemas.microsoft.com/sharepoint/">
                </Field>';

$fieldsArray += '<Field ID="{34152d4b-1ed6-40b8-b575-dcc43f482c51}" 
                Name="Arma_Caracteristicas"
                DisplayName="Caracteristicas" 
                Type="Note" 
                Multiline="True"
                Group="FichaArma" 
                xmlns="http://schemas.microsoft.com/sharepoint/">
                </Field>';

$fieldsArray += '<Field ID="{1bd9ae3f-5b95-4c2a-b38d-0f58acdca398}" 
                Name="Arma_Bonificacion"
                DisplayName="Bonificación de ataque" 
                Type="Number"
                Required="TRUE"
                Min="0"
                Group="FichaArma" 
                xmlns="http://schemas.microsoft.com/sharepoint/">
                </Field>';


$backgroundColor = "=if (@currentField == '1', '#498205',if (@currentField == '0', '#D13438','#000000')))"
 
$formatter = '{&quot;$schema&quot;:&quot;https://developer.microsoft.com/json-schemas/sp/v2/column-formatting.schema.json&quot;,&quot;elmType&quot;:&quot;div&quot;,&quot;style&quot;:{&quot;padding-left&quot;:&quot;4px&quot;,&quot;color&quot;:&quot;#fff&quot;,&quot;background-color&quot;:&quot;' + $backgroundColor+'&quot;},&quot;txtContent&quot;:&quot;@currentField&quot;}'
 

$fieldsArray += '<Field ID="{b85e08b9-eb07-42c1-8ac7-a779a0f4513c}" 
                Name="Arma_Competencia" 
                DisplayName="Competencia"  
                Type="Boolean" 
                Group="FichaArma" 
                CustomFormatter="' + $formatter + '"
                xmlns="http://schemas.microsoft.com/sharepoint/">
                </Field>';

$fieldsArray += '<Field ID="{70b59474-27d8-4215-a1ba-8ebddb3e0128}" 
                Name="Arma_Bonificacion_Ad" 
                DisplayName="Bonificación adicional de ataque"  
                Type="Number" 
                Required="TRUE"
                Default="0"
                Group="FichaArma" 
                xmlns="http://schemas.microsoft.com/sharepoint/">
                </Field>';

$fieldsArray += '<Field ID="{2eeecf0b-1dbb-46cd-b355-1c69b6140b5f}" 
                Name="Arma_Foto" 
                DisplayName="Foto del Arma"  
                Type="URL" 
                Format="Image"
                Group="FichaArma" 
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
