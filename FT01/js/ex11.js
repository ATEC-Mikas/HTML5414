$(document).ready(function() {
    var turma = [
                ["Mikas","desc"],
                ["Joao","desc"],
                ["Nebes","desc"],
                ["Nebes","desc"],
                ["Nebes","desc"],
                ["Nebes","desc"],
                ["Nebes","desc"],
                ["Nebes","desc"],
                ["Nebes","desc"],
                ["Nebes","desc"],
                ["Nebes","desc"],
                ["Nebes","desc"],
                ["Nebes","desc"],
                ["Nebes","desc"],
                ["Nebes","desc"],
                ["Nebes","desc"],
                ["Nebes","desc"],
                ["Joao","desc"]
    ];
    $("#indexTurma").append("<ul>");
    for(var i=0;i<turma.length;i++) {
        var entrada = "<article>" 
                    +"<h2 id='"+i+"'>"+turma[i][0]+"</h2>"
                    +"<img src='imgs/1.jpg'/><br>"
                    +"<p>"+turma[i][1]+"</p>"
                    +"</article>";
        $("#listaTurma").append(entrada);
        $("#indexTurma").append("<li><a href='#"+i+"'> "+turma[i][0]+"</a> </li>")
    }
    $("#indexTurma").append("</ul>");
    });