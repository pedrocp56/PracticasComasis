$fields = $web.Fields;
$context.Load($fields);
$context.ExecuteQuery();


#[guid]::NewGuid()
$fieldsArray = @();

$fieldsArray += '<Field ID="{6333a468-61c3-442b-b4e6-5518a71983cf}" 
                Name="Caracteristica_Fuerza"
                DisplayName="Fuerza" 
                Type="Number"
                Required="TRUE"
                Min="1"
                Max="30"
                Indexed="False"
                Group="FichaPersonajeCar" 
                xmlns="http://schemas.microsoft.com/sharepoint/">
                </Field>';

$fieldsArray += '<Field ID="{d74093cf-a792-4f84-b7d1-d4aa9726a8ad}" 
                Name="Caracteristica_Destreza"
                DisplayName="Destreza" 
                Type="Number"
                Required="TRUE"
                Min="1"
                Max="30"
                Indexed="FALSE"
                Group="FichaPersonajeCar" 
                xmlns="http://schemas.microsoft.com/sharepoint/">
                </Field>';



$fieldsArray += '<Field ID="{243ccb66-913a-488f-be49-c12eac1a2680}" 
                Name="Caracteristica_Constitución"
                DisplayName="Constitución" 
                Type="Number"
                Required="TRUE"
                Min="1"
                Max="30"
                Group="FichaPersonajeCar" 
                xmlns="http://schemas.microsoft.com/sharepoint/">
                </Field>';

$fieldsArray += '<Field ID="{1db2512c-3b68-4428-8363-2a91f168ff9d}" 
                Name="Caracteristica_Inteligencia" 
                DisplayName="Inteligencia" 
                Type="Number"
                Required="TRUE"
                Min="1"
                Max="30"
                Group="FichaPersonajeCar" 
                xmlns="http://schemas.microsoft.com/sharepoint/">
                </Field>';

$fieldsArray += '<Field ID="{2ee98c77-7416-4ff7-b36e-680bb210f5db}" 
                Name="Caracteristica_Sabiduria"
                DisplayName="Sabiduria" 
                Type="Number"
                Required="TRUE"
                Min="1"
                Max="30"
                Group="FichaPersonajeCar" 
                xmlns="http://schemas.microsoft.com/sharepoint/">
                </Field>';

$fieldsArray += '<Field ID="{941bc503-7761-4701-87ca-65a7bd1fb132}" 
                Name="Caracteristica_Carisma"
                DisplayName="Carisma" 
                Type="Number"
                Required="TRUE"
                Min="1"
                Max="30"
                Group="FichaPersonajeCar" 
                xmlns="http://schemas.microsoft.com/sharepoint/">
                </Field>';

$backgroundColor = "=if (@currentField &gt 0, '#498205',if (@currentField == 0, '#CA5010',if (@currentField &lt 0, '#D13438','#000000')))"

$formatter = '{&quot;$schema&quot;:&quot;https://developer.microsoft.com/json-schemas/sp/v2/column-formatting.schema.json&quot;,&quot;elmType&quot;:&quot;div&quot;,&quot;style&quot;:{&quot;padding-left&quot;:&quot;4px&quot;,&quot;color&quot;:&quot;#fff&quot;,&quot;background-color&quot;:&quot;' + $backgroundColor + '&quot;},&quot;txtContent&quot;:&quot;@currentField&quot;}'



$fieldsArray += '<Field ID="{3df79433-07ad-42d3-88f5-9ccb215f5f64}" 
                Name="Caracteristica_Bono_Fuerza" 
                DisplayName="Bonificación de fuerza"  
                Type="Number"
                Min="-5"
                Max="10"
                Group="FichaPersonajeCar"
                CustomFormatter="' + $formatter + '"
                xmlns="http://schemas.microsoft.com/sharepoint/">
                </Field>';

$fieldsArray += '<Field ID="{cd3bf72c-a4d6-4831-8344-c58f9947e588}" 
                Name="Caracteristica_Bono_Destreza" 
                DisplayName="Bonificación de destreza"  
                Type="Number"
                Min="-5"
                Max="10"
                Group="FichaPersonajeCar"
                CustomFormatter="' + $formatter + '" 
                xmlns="http://schemas.microsoft.com/sharepoint/">
                </Field>';

$fieldsArray += '<Field ID="{cd4db9fa-7c37-45e4-926e-9ddf8f704b3a}" 
                Name="Caracteristica_Bono_Constitución" 
                DisplayName="Bonificación de constitución"  
                Type="Number"
                Min="-5"
                Max="10"
                Group="FichaPersonajeCar" 
                CustomFormatter="' + $formatter + '"
                xmlns="http://schemas.microsoft.com/sharepoint/">
                </Field>';

$fieldsArray += '<Field ID="{881b4d1d-b7ef-4cfc-9cd6-92113e3b8ad4}" 
                Name="Caracteristica_Bono_Inteligencia" 
                DisplayName="Bonificación de inteligencia "  
                Type="Number"
                Min="-5"
                Max="10" 
                Group="FichaPersonajeCar" 
                CustomFormatter="' + $formatter + '"
                xmlns="http://schemas.microsoft.com/sharepoint/">
                </Field>';

$fieldsArray += '<Field ID="{a34825b8-2c29-45da-97a1-837c754f0e50}" 
                Name="Caracteristica_Bono_Sabiduria" 
                DisplayName="Bonificación de sabiduria"  
                Type="Number"
                Min="-5"
                Max="10"
                Group="FichaPersonajeCar" 
                CustomFormatter="' + $formatter + '"
                xmlns="http://schemas.microsoft.com/sharepoint/">
                </Field>';

$fieldsArray += '<Field ID="{beade7ab-3b39-481e-80cb-cbef4a7ee31d}" 
                Name="Caracteristica_Bono_Carisma" 
                DisplayName="Bonificación de carisma"  
                Type="Number"
                Min="-5"
                Max="10"
                Group="FichaPersonajeCar" 
                CustomFormatter="' + $formatter + '"
                xmlns="http://schemas.microsoft.com/sharepoint/">
                </Field>';

$fieldsArray += '<Field ID="{042288df-7c62-45a3-9fca-4c2e2cccbbb4}" 
                Name="Bono_Competencia" 
                DisplayName="Bono de competencia"  
                Type="Number"
                Min="2"
                Max="6" 
                Required="True"
                Group="FichaPersonajeCar" 
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
