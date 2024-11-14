$(document).ready(function () {
    $("#modalId").on('shown.bs.modal', function () {
        // Đặt trỏ chuột vào ô input trong modal
        $("#txtHoten").focus();
    });
    



    //model
    function ktrarong(giatri, text) {
        var regex = giatri.trim();
        if (regex == "") {
            $(text).html("Không được để trống");
            return false;

        } else {
            $(text).html("*");
            return true;
        }
    }

    function ktrahoten(giatri, text) {
        var regex = /^([A-Z]{1}[a-z]*)(\s[A-Z]{1}[a-z]*)*(\s[A-Z]{1}[a-z]*)$/;
        if (!regex.test(giatri)) {
            $(text).html( "Họ tên: Phải có ít nhất Họ, Tên. Ký tự đầu bắt buộc phải viết hoa");
            return false;
        } else {
            $(text).html("*");
            return true;
        }
    }

    function ktrasdt(giatri, text) {
        var regex = /^(09||03||07||06||05||04)[0-9]{8}$/;
        if (!regex.test(giatri)) {
            $(text).html("Điện thoại phải là số điện thoại 10 ký tự số, bắt đầu là 09, 03, 07, 06, 05, 04 !");
            return false;
        }
        else {
            $(text).html("*");
            return true;
        }
    }


    $("#txtHoten").blur(function (e) {
        let ht = $("#txtHoten").val();
        if (!ktrarong(ht, "#tbMa")) {
            return;
        }
        ktrahoten(ht, "#tbMa");
    });
    $("#txtSdt").blur(function (e) {
        var sdt = $("#txtSdt").val();
        ktrasdt(sdt, "#tbSDT");

    });
    $("#txtngay").blur(function (e) {
        let date = new Date();
        let nam1 = date.getFullYear();
        let YearNumber = Number(nam1);
        let valns = $("#txtngay").val();
        var valnspart = valns.split('-');
        let ns = valnspart[0];
        let nsnumber = Number(ns);
        let nam = YearNumber - nsnumber;
        if (nam < 18) {
            tbNgay.innerHTML = "Tuổi lớn hơn 18 ";
        } else {
            tbNgay.innerHTML = "";
        }
    });
    $("#txtDc").blur(function (e) {
        var dc = $("#txtDc").val();
        ktrarong(dc, "#tbDc");
    });
    $("#btndathang").click(function (e) {
        let ht = $("#txtHoten").val();
        var dc = $("#txtDc").val();
        var sdt = $("#txtSdt").val();
        if (ktrahoten(ht, "#tbMa") && ktrarong(dc, "#tbDc") && ktrasdt(sdt, "#tbSDT")) {
            alert("Đặt hàng thành công");
            $("#modalId").modal("hide");
            $("#txtHoten").val()="";
            $("#txtDc").val()="";
            $("#txtSdt").val()="";
        }

    });


    //end model
    $('.star').click(function () {
        var value = $(this).data('value');
        $('.star').removeClass('active');
        $('.star').each(function () {
            if ($(this).data('value') <= value) {
                $(this).addClass('active');
            }
        });
    });

    // Lắng nghe sự kiện click vào mũi tên trái và phải để điều khiển chuyển đổi giữa các ảnh
    document.addEventListener("DOMContentLoaded", function () {
        var carousel = document.getElementById('productCarousel');
        var carouselInstance = new bootstrap.Carousel(carousel);

        var prevButton = carousel.querySelector('.carousel-control-prev');
        prevButton.addEventListener('click', function () {
            carouselInstance.prev();
        });

        var nextButton = carousel.querySelector('.carousel-control-next');
        nextButton.addEventListener('click', function () {
            carouselInstance.next();
        });
    });
    // Xử lý sự kiện click vào nút để thay đổi ảnh
    $(".btn-change-image").click(function () {
        var newSrc = $(this).data("src"); // Lấy đường dẫn ảnh từ thuộc tính data-src của nút
        $(".image__main").attr("src", newSrc); // Thay đổi đường dẫn của ảnh chính
    });

    function selectColor(color) {
        // Xóa lớp 'selected' khỏi tất cả các hình tròn
        var circles = document.querySelectorAll('.color-circle');
        circles.forEach(circle => {
            circle.classList.remove('selected');
        });

        // Thêm lớp 'selected' cho hình tròn được chọn
        var selectedCircle = document.querySelector('.' + color);
        selectedCircle.classList.add('selected');

        // Có thể thêm các hành động khác khi chọn màu ở đây
        console.log('Selected color:', color);
    }
});