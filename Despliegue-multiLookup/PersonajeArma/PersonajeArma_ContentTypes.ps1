$contentTypeGroup = "PersonajeArmaInformacion";
$contentTypeName = "PersonajeArmaInfo";

#Añadir los internal names de las columnas que compondrán el tipo de contenido
$columns = "LookupPersonaje","LookupArma","Competencia", "Bonificacion_Adiccional";

$parentContentTypeID = "0x01"

    
    $fields = $context.web.fields
$contentTypes = $context.web.contenttypes
$context.load($fields)
$context.load($contentTypes)

#enviar la solicitud que contiene todas las operaciones al servidor.

 try{
        $context.executeQuery()
        write-host "info: Loaded Fields and Content Types" -foregroundcolor green
    }
    catch{
        write-host "info: $($_.Exception.Message)" -foregroundcolor red
    }

#carga del tipo de contenido del padre

$parentContentType = $contentTypes.GetByID($parentContentTypeID)
$context.load($parentContentType)

    try{
            $context.executeQuery()
            write-host "info: loaded parent Content Type" -foregroundcolor green
        }
     catch{
            write-host "info: $($_.Exception.Message)" -foregroundcolor red
        }

#crear Tipo de contenido usando ContentTypeCreationInformation object (ctci)

    $ctci = new-object Microsoft.SharePoint.Client.ContentTypeCreationInformation
    $ctci.name = $contentTypeName
    $ctci.ParentContentType = $parentContentType
    $ctci.group = $contentTypeGroup
    $ctci = $contentTypes.add($ctci)
    $context.load($ctci)


        try{
            $context.executeQuery()
            write-host "info: Created content type" -foregroundcolor green
        }
        catch{
            write-host "info: $($_.Exception.Message)" -foregroundcolor red
        }

#conseguir el nuevo tipo de contenido objeto
$newContentType = $context.web.contenttypes.getbyid($ctci.id)

# loop through all the columns that needs to be added
        foreach ($column in $columns){
            $field = $fields.GetByInternalNameOrTitle($column)
            #create FieldLinkCreationInformation object (flci)
            $flci = new-object Microsoft.SharePoint.Client.FieldLinkCreationInformation
            $flci.Field = $field
            $addContentType = $newContentType.FieldLinks.Add($flci)
            #write-host "info: added $($column) to array" -foregroundcolor green
        }        
        $newContentType.Update($true)



    try{
            $context.executeQuery()
            write-host "info: Added columns to content type" -foregroundcolor green
        }
        catch{
            write-host "ERROR: $($_.Exception.Message)" -foregroundcolor red
        }

        $context.Load($newContentType.FieldLinks);
        try{
            $context.executeQuery()
        }
        catch{
            write-host "ERROR en fields: $($_.Exception.Message)" -foregroundcolor red
        }

        

Write-Host "Tipo de contenido $contentTypeName creado correctamente." -ForegroundColor Green;