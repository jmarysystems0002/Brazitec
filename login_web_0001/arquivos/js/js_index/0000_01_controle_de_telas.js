/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

function _0000_01_controle_de_telas(tela_para_exibir){            
    try{
        
        //alert( tela_para_exibir );
        
        var telas = "div_novo_usuario@editar_perfil@resposta";
        
        document.getElementById( 'div_novo_usuario' ).style.display = 'none';
        document.getElementById( 'editar_perfil' ).style.display = 'none';
        document.getElementById( 'resposta' ).style.display = 'none';
        
        //TELA RECEBIDA
        document.getElementById( tela_para_exibir ).style.display = 'block';
        
    }catch(Exception){}     
}