

        $web = $context.Web;
    
        $fields = $web.Fields;

        $context.Load($web);
        $context.Load($fields);

        $context.ExecuteQuery();

        $columns = "Salvacion_Fuerza","Salvacion_Destreza","Salvacion_Constitucion","Salvacion_Inteligencia","Salvacion_Sabiduria","Salvacion_Carisma",
            "Salvacion_Comp_Fuerza", "Salvacion_Comp_Destreza", "Salvacion_Comp_Constitucion", "Salvacion_Comp_Inteligencia", "Salvacion_Comp_Sabiduria", "Salvacion_Comp_Carisma", 
            "Salvacion_Boni_Fuerza", "Salvacion_Boni_Destreza", "Salvacion_Boni_Constitucion", "Salvacion_Boni_Inteligencia", "Salvacion_Boni_Sabiduria", "Salvacion_Boni_Carisma";

        foreach($column in $columns) {

            $field = $fields.GetByInternalNameOrTitle($column);

            if ($field) {
                $context.Load($field);
                $context.ExecuteQuery();
        
                $field.DeleteObject();

                try{
                    $context.executeQuery()
                    write-host "Columna $column eliminada correctamente" -foregroundcolor green
                }
                catch{
                    write-host "ERROR: $($_.Exception.Message)" -foregroundcolor red
                }
            }
         }
        
           