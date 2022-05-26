var estado = 0
function menu(x)
{
    x.classList.toggle("change")
    if (estado == 0)
    {
        document.getElementById('menu').style.display = "block"
        estado = 1
    }
    else
    {
        document.getElementById('menu').style.display = "none"
        estado = 0
    }
}