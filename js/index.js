// $('[data-toggle="tooltip"]').tooltip();
$("#exampleModal").on("show.bs.modal", function (e) {
    console.log('se muestra');
    $('.btn').removeClass('btn-dark')
    $('.btn').addClass('btn-outline-dark')
    // $('.btn').prop('disabled',true)

});
$("#exampleModal").on("shown.bs.modal", function (e) {
    console.log('se mostro');

});
$("#exampleModal").on("hide.bs.modal", function (e) {
    console.log('se oculta');

});
$("#exampleModal").on("hidden.bs.modal", function (e) {
    console.log('se oculto')
    // $('.btn').prop('disabled',false)
});