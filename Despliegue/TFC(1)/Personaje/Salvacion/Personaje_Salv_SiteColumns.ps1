$fields = $web.Fields;
$context.Load($fields);
$context.ExecuteQuery();


#[guid]::NewGuid()
$fieldsArray = @();

$fieldsArray += '<Field ID="{bfe93e7f-7e6f-4732-b198-36dabd6deb81}" 
                Name="Salvacion_Fuerza"
                DisplayName="Salvacion de fuerza" 
                Type="Number"
                Indexed="False"
                Group="FichaPersonajeCar" 
                xmlns="http://schemas.microsoft.com/sharepoint/">
                </Field>';

$fieldsArray += '<Field ID="{6af37ec8-3e29-443c-bfc0-809a1f424917}" 
                Name="Salvacion_Destreza"
                DisplayName="Salvacion de destreza" 
                Type="Number"
                Indexed="FALSE"
                Group="FichaPersonajeCar" 
                xmlns="http://schemas.microsoft.com/sharepoint/">
                </Field>';


$fieldsArray += '<Field ID="{d6656c79-a012-46d6-a0a9-21dfa56497ff}" 
                Name="Salvacion_Constitucion"
                DisplayName="Salvacion de constitución" 
                Type="Number"
                Group="FichaPersonajeCar" 
                xmlns="http://schemas.microsoft.com/sharepoint/">
                </Field>';

$fieldsArray += '<Field ID="{96201715-0d2c-4ad6-869a-b9bbbd6c5845}" 
                Name="Salvacion_Inteligencia" 
                DisplayName="Salvacion de inteligencia" 
                Type="Number"
                Group="FichaPersonajeCar" 
                xmlns="http://schemas.microsoft.com/sharepoint/">
                </Field>';

$fieldsArray += '<Field ID="{d5b20817-7668-459b-b813-1f775afe7215}" 
                Name="Salvacion_Sabiduria"
                DisplayName="Salvacion de sabiduría" 
                Type="Number"
                Group="FichaPersonajeCar" 
                xmlns="http://schemas.microsoft.com/sharepoint/">
                </Field>';

$fieldsArray += '<Field ID="{be50cfbe-7bfe-438f-b2ce-a3f2e55b1f21}" 
                Name="Salvacion_Carisma"
                DisplayName="Salvacion de carisma" 
                Type="Number"
                Group="FichaPersonajeCar" 
                xmlns="http://schemas.microsoft.com/sharepoint/">
                </Field>';

$fieldsArray += '<Field ID="{a4b40906-ec54-4431-97d1-1019aa1ad46c}" 
                Name="Salvacion_Comp_Fuerza" 
                DisplayName="Competencia en salvacón de fuerza"  
                Type="Boolean" 
                Group="FichaPersonajeCar" 
                CustomFormatter="' + $formatter + '"
                xmlns="http://schemas.microsoft.com/sharepoint/">
                </Field>';

$fieldsArray += '<Field ID="{b4048ca2-141f-4eed-97f1-b14a2af56cbd}" 
                Name="Salvacion_Comp_Destreza" 
                DisplayName="Competencia en salvacón de destreza"  
                Type="Boolean" 
                Group="FichaPersonajeCar" 
                xmlns="http://schemas.microsoft.com/sharepoint/">
                </Field>';

$fieldsArray += '<Field ID="{2e62e7d5-e113-4524-8e9e-dd4afa8e9177}" 
                Name="Salvacion_Comp_Constitucion" 
                DisplayName="Competencia en salvacón de constitución"  
                Type="Boolean" 
                Group="FichaPersonajeCar" 
                xmlns="http://schemas.microsoft.com/sharepoint/">
                </Field>';

$fieldsArray += '<Field ID="{d2351415-b9e7-48a1-9b28-9458ecf767d8}" 
                Name="Salvacion_Comp_Inteligencia" 
                DisplayName="Competencia en salvacón de inteligencia"  
                Type="Boolean"  
                Group="FichaPersonajeCar" 
                xmlns="http://schemas.microsoft.com/sharepoint/">
                </Field>';

$fieldsArray += '<Field ID="{23ecee20-9590-4055-87be-1f401e666dc8}" 
                Name="Salvacion_Comp_Sabiduria" 
                DisplayName="Competencia en salvacón de sabiduría"  
                Type="Boolean"  
                Group="FichaPersonajeCar" 
                xmlns="http://schemas.microsoft.com/sharepoint/">
                </Field>';

$fieldsArray += '<Field ID="{23ecee20-9590-4055-87be-1f401e666dc8}" 
                Name="Salvacion_Comp_Carisma" 
                DisplayName="Competencia en salvacón de arisma"  
                Type="Boolean" " 
                Group="FichaPersonajeCar" 
                xmlns="http://schemas.microsoft.com/sharepoint/">
                </Field>';

$fieldsArray += '<Field ID="{41a7fcf2-291d-40af-b82b-6b3bee54fe02}" 
                Name="Salvacion_Boni_Fuerza" 
                DisplayName="Bonificación en salvación de fuerza"  
                Type="Number"
                Required="True"
                Default="0" 
                Group="FichaPersonajeCar" 
                xmlns="http://schemas.microsoft.com/sharepoint/">
                </Field>';

$fieldsArray += '<Field ID="{6ae3e787-3ed2-461d-895d-e90c886ecde7}" 
                Name="Salvacion_Boni_Destreza" 
                DisplayName="Bonificación en salvación de destreza"  
                Type="Number"
                Required="True"
                Default="0" 
                Group="FichaPersonajeCar" 
                xmlns="http://schemas.microsoft.com/sharepoint/">
                </Field>';

$fieldsArray += '<Field ID="{0c8a8843-7495-4fef-98db-3cd516f26a55}" 
                Name="Salvacion_Boni_Constitucion" 
                DisplayName="Bonificación en salvación de constitución"  
                Type="Number"
                Required="True"
                Default="0"  
                Group="FichaPersonajeCar" 
                xmlns="http://schemas.microsoft.com/sharepoint/">
                </Field>';

$fieldsArray += '<Field ID="{fd08eed1-b8ed-4265-9fb1-15fa3dc08d7a}" 
                Name="Salvacion_Boni_Inteligencia" 
                DisplayName="Bonificación en salvación de inteligencia"  
                Type="Number"
                Required="True"
                Default="0" 
                Group="FichaPersonajeCar" 
                xmlns="http://schemas.microsoft.com/sharepoint/">
                </Field>';

$fieldsArray += '<Field ID="{fd08eed1-b8ed-4265-9fb1-15fa3dc08d7a}" 
                Name="Salvacion_Boni_Sabiduria" 
                DisplayName="Bonificación en salvación de sabiduría"  
                Type="Number"
                Required="True"
                Default="0" 
                Group="FichaPersonajeCar" 
                xmlns="http://schemas.microsoft.com/sharepoint/">
                </Field>';

$fieldsArray += '<Field ID="{fd08eed1-b8ed-4265-9fb1-15fa3dc08d7a}" 
                Name="Salvacion_Boni_Carisma" 
                DisplayName="Bonificación en salvación de carisma"  
                Type="Number"
                Required="True"
                Default="0" 
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
