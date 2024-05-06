#creacion de la region de la lista

$listTitle = "Personajes"
$listDescription = "Lista Personaje"
$listTemplate = 100

#añadir tipos de contenido
$tipodecontenido = "Personaje"

$lci = New-Object Microsoft.SharePoint.Client.ListCreationInformation
$lci.title = $listTitle
$lci.description = $listDescription
$lci.TemplateType = $listTemplate

$list = $context.web.lists.add($lci)
$context.load($list)

    try{
        $context.executeQuery()
        write-host "List $($listTitle) created" -foregroundcolor green
    }
    catch{
        write-host "ERROR: $($_.Exception.Message)" -foregroundcolor red
    }  


    $list.ContentTypesEnabled = $true
    $list.EnableFolderCreation = $false;
    #$list.OnQuickLaunch = $false;
    #$list.Hidden = $true;
    $list.Update();

#añadir/eliminar tipos de contenidos
$contentTypes = $web.ContentTypes;

    $context.Load($contentTypes);

    $context.ExecuteQuery();



    $contentType = $contentTypes | Where-Object {$_.Name -eq $tipodecontenido} 
   
    if ($contentType -ne $null) {
        $AddCT = $list.ContentTypes.AddExistingContentType($contentType)
        $tiposenlista = $list.ContentTypes;
        $context.Load($list.ContentTypes);
        $context.ExecuteQuery();

        #eliminar tipos de contenido
        $tiposBorrar = New-Object System.Collections.ArrayList($null);

        foreach ($tipoenlista in $list.ContentTypes) {
            if ($tipoenlista.Name -eq "Elemento") {
                $dontshow = $tiposBorrar.Add($tipoenlista);
            
            }
        }
        foreach ($tipoBorrar in $tiposBorrar) {
            $tipoBorrar.DeleteObject();
        
        }
        $context.ExecuteQuery();

        $list.Update();  
    
        try{
            $context.executeQuery()
            write-host "content type $tipodecontenido added to the list" -foregroundcolor green
        }
        catch{
            write-host "ERROR: $($_.Exception.Message)" -foregroundcolor red
        }  

        #region VISTA
        $views = $list.Views;
        $context.Load($views);
        $context.executeQuery()
    
    $vista = $null;

    foreach ($view in $views) {

            if ($view.Title -eq "Todos los elementos") { #Todos los documentos
                $vista = $view;
                continue;
            }
      }

if ($vista) {
        
        $viewFields = $view.ViewFields;
        $context.Load($viewFields);
        $context.ExecuteQuery();
        $vista.ViewFields.Add("Personaje_Usuario");
        $vista.ViewFields.Add("Caracteristica_Fuerza");
        $vista.ViewFields.Add("Caracteristica_Destreza");
        $vista.ViewFields.Add("Caracteristica_Constitucion");
        $vista.ViewFields.Add("Caracteristica_Inteligencia");
        $vista.ViewFields.Add("Caracteristica_Sabiduria");
        $vista.ViewFields.Add("Caracteristica_Carisma");
        $vista.ViewFields.Add("Campanha");
        $vista.ViewFields.Add("Bono_Competencia");
        $vista.ViewFields.Add("LookupArma");
        $vista.ViewFields.Add("Personaje_Foto");
        
        $vista.ViewQuery = "<OrderBy><FieldRef Name='Title' Ascending='FALSE'/></OrderBy>"


        $vista.Update();

    try{
            $context.executeQuery()
            write-host "vista modificada correctamente" -foregroundcolor green
        }
        catch{
            write-host "info: $($_.Exception.Message)" -foregroundcolor red
        }  
    }
    else {
        Write-Host "ERROR: no localizamos la vista" -ForegroundColor Red
    }


    }
$list = $web.Lists.GetByTitle("Personajes")
    $context.Load($list)
    $context.executeQuery()
    
    $context.Load($list.Fields)
    $context.executeQuery()
        

    $titleField = $list.Fields| Where-Object {$_.InternalName -eq "Title"}
    $context.Load($titleField)
    $context.executeQuery()
       

    $titleField.Title = "Nombre del personaje"
    $titleField.Update()

    $list = $web.Lists.GetByTitle("Armas")
    $context.Load($list)
    $context.executeQuery()



