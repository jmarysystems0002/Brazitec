/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

///////////////////////////////////////////////////////////////////////////////////////////////////////////   
///////////////////////////////////////////////////////////////////////////////////////////////////////////         
function _0005_02_controle_de_validade_tabela_html_listar_na_tabela_html_a_planilha_principal(){ 
    
    try{
                                                
        if( document.getElementById("tabela_de_produtos_proximos_do_vencimento_xls").value === "null" ){
                                                        
            //alert("1");
        }
        else{
                    
            //alert("2");        
            _0005_02_controle_de_validade_tabela_html_listar_na_tabela_html_a_planilha_principal_verificando_se_tem_dados();
        }
            
    }catch(Exception){
        
        document.getElementById("divConteudo").innerHTML = "_0005_02_controle_de_validade_tabela_html_listar_na_tabela_html_a_planilha_principal -- \n\n" + Exception;
    }
}

function _0005_02_controle_de_validade_tabela_html_listar_na_tabela_html_a_planilha_principal_verificando_se_tem_dados(){
            
    try{
                
        var tem_dados = false;
        var linha_recebida = document.getElementById("tabela_de_produtos_proximos_do_vencimento_xls").value.split("@");
        
        for( var i = 0; i < linha_recebida.length; i++ ) {
            
            if( linha_recebida[i].includes("-") ){
                tem_dados = true;
                break;
            }
        }
                
        if( tem_dados === true ){
                                                                
            _0005_02_controle_de_validade_tabela_html_listar_na_tabela_html_a_planilha_principal_listando_dados();
        }
        else{
                    
            //
        }
    }catch(Exception){
        
        document.getElementById("divConteudo").innerHTML = "_0005_02_controle_de_validade_tabela_html_listar_na_tabela_html_a_planilha_principal_verificando_se_tem_dados -- \n\n" + Exception;
    }
}

function _0005_02_controle_de_validade_tabela_html_listar_na_tabela_html_a_planilha_principal_listando_dados(){            
    try{           
        
        ////////////////////////////////////////////////////////////////////////////
        var modificador = document.getElementById("divConteudo").innerHTML;
        setTimeout(function(){ 
        /* 
            document.getElementById("divConteudo").innerHTML = 
                "<table border='0' cellpadding='0' cellspacing='0' style='width:100%;'> <tr><td style='width:30%;'> </td></tr>  <tr> <td align='center' style='width:40%;'> " + "Aguarde!: " + "carregando..." + " </td> </tr> <tr><td style='width:30%;'> </td></tr> </table>" + 
                "<table border='0' cellpadding='0' cellspacing='0' style='width:100%;'> <tr><td style='width:30%;'> </td></tr>  <tr> <td align='center' style='width:40%;'> <img src='../arquivos/imagens/003_login/javafx-loading-100x100.gif' style='cursor: pointer; 'width='80' height='80'> </td> </tr> <tr><td style='width:30%;'> </td></tr> </table>";
        */
        }, 0);
        ///////////////////////////////////////////////////////////////////////////
                
        var linha_recebida = document.getElementById("tabela_de_produtos_proximos_do_vencimento_xls").value.split("@");            
 
        for( var i = 0; i < linha_recebida.length; i++ ) {
        
            if( linha_recebida[i].includes("-") ){
                
                //alert(linha_recebida[i]);
                var jm_id = "";
                var jm_comando = "";
                var jm_auto_quantidade_de_alteracoes = "";                        
                var jm_destinatario = "";
                var jm_remetente = "";
                var jm_data = "";
                var jm_qtd = "";
                var jm_ean = "";
                var jm_material = "";
                var jm_umb = "";
                
                var argumentos = linha_recebida[i].split("j");
                
                try{
                    
                    jm_id = argumentos[0];
                    jm_comando = argumentos[1];
                    jm_auto_quantidade_de_alteracoes = argumentos[2];
                    jm_destinatario = argumentos[3];
                    jm_remetente = argumentos[4];
                    jm_data = argumentos[5];
                    jm_qtd = argumentos[6];
                    jm_ean = argumentos[7];
                    jm_material = argumentos[8];
                    jm_umb = argumentos[9];
                }catch(Exception){}
                
                var remet2 = ""; try{ remet2 = importar_Para_Alfabeto_JM( jm_remetente ).trim() }catch(Exception){}
                var remet = remet2; try{ remet = remet2.replace("%20", " ").trim().toUpperCase(); }catch(Exception){}
                               
                $('#tabela > tbody:last').append(
                    '<tr>' + 
                        '<td>' + importar_Para_Alfabeto_JM( jm_id ).trim() + '</td>' + 
                        //'<td>' + importar_Para_Alfabeto_JM( jm_comando ).trim() + '</td>' + 
                        //'<td>' + importar_Para_Alfabeto_JM( jm_auto_quantidade_de_alteracoes ).trim() + '</td>' + 
                        '<td>' + importar_Para_Alfabeto_JM( jm_destinatario ).trim() + '</td>' + 
                        '<td>' + remet.trim() + '</td>' + 
                        '<td>' + importar_Para_Alfabeto_JM( jm_data ).trim() + '</td>' + 
                        '<td>' + importar_Para_Alfabeto_JM( jm_qtd ).trim() + '</td>' + 
                        '<td NOWRAP=\'NOWRAP\'>' + importar_Para_Alfabeto_JM( jm_ean ).trim() + '</td>' + 
                        '<td NOWRAP=\'NOWRAP\'>' + importar_Para_Alfabeto_JM( jm_material ).trim() + '</td>' + 
                        '<td>' + importar_Para_Alfabeto_JM( jm_umb ).trim() + '</td>' + 
                    '</tr>'
                );

            }   
        }

        //Após adicionar todas as linhas na tabela, adicionar eventos nas linhas ao selecioná-las
        setTimeout(function(){    
            
            //try{ _01_03_percorrer_tabela_html_fazer_alteracoes_e_exclusoes(); }catch(Exception){} 
            
            //try{ _01_04_tabela_html_configuracoes_adicionar_eventos_a_todas_as_linhas(); }catch(Exception){} 
                        
        }, 1000);
        
        
        
        ////////////////////////////////////////////////////////////////////////////
        setTimeout(function(){ 
        //* 
            //document.getElementById("divConteudo").innerHTML = modificador;
        //*/
        }, 1000);
        ///////////////////////////////////////////////////////////////////////////
        
    }catch(Exception){
        
        document.getElementById("divConteudo").innerHTML = "_0005_02_controle_de_validade_tabela_html_listar_na_tabela_html_a_planilha_principal_listando_dados -- \n\n" + Exception;
    }   
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////