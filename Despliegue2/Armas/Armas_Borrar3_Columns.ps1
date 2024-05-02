﻿

        $web = $context.Web;
    
        $fields = $web.Fields;

        $context.Load($web);
        $context.Load($fields);

        $context.ExecuteQuery();

        $columns = "Arma_Ataque","Arma_Daño","Arma_Tipo", "Arma_Arrojadiza", "Arma_Car", "Arma_Caracteristicas";

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
        
           