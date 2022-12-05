function Toast(icon, title, text) {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-right',
        iconColor: 'white',
        customClass: {
            popup: 'colored-toast'
        },
        showConfirmButton: false,
        timerProgressBar: true
    });

    Toast.fire({
        icon: icon,
        title: title,
        text: text,
        timer: 3000
    })
}