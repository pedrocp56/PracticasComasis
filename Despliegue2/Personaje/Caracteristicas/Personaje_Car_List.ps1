﻿#creacion de la region de la lista

$listTitle = "Lista_PersonajeCar"
$listDescription = "Lista Personaje Caracteristicas"
$listTemplate = 100

#añadir tipos de contenido
$tipodecontenido = "PersonajeCar"

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
        $view.ViewFields.Add("Caracteristica_Fuerza");
        $view.ViewFields.Add("Caracteristica_Bono_Fuerza");
        $view.ViewFields.Add("Caracteristica_Destreza");
        $view.ViewFields.Add("Caracteristica_Bono_Destreza");
        $view.ViewFields.Add("Caracteristica_Constitución");
        $view.ViewFields.Add("Caracteristica_Bono_Constitución");
        $view.ViewFields.Add("Caracteristica_Inteligencia");
        $view.ViewFields.Add("Caracteristica_Bono_Inteligencia");
        $view.ViewFields.Add("Caracteristica_Sabiduria");
        $view.ViewFields.Add("Caracteristica_Bono_Carisma");
        $view.ViewFields.Add("Bono_Competencia");

        $view.ViewQuery = "<OrderBy><FieldRef Name='Title' Ascending='FALSE'/></OrderBy>"


        $view.Update();

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



