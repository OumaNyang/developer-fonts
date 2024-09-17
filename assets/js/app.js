const libfonts = [
    { "font-name": "D-DIN", "font-family": "Sans-serif", "class": "d-din", "download_link": "lib/D-DIN" },
    { "font-name": "DIN", "font-family": "Sans-serif", "class": "din", "download_link": "lib/DN-Regular" },
    { "font-name": "Figtree", "font-family": "Sans-serif", "class": "figtree", "download_link": "lib/Figtree" },
    { "font-name": "Gilroy", "font-family": "Sans-serif", "class": "gilroy", "download_link": "lib/Gilroy" },
    { "font-name": "Mandali", "font-family": "Sans-serif", "class": "mandali", "download_link": "lib/Mandali" },
    { "font-name": "Outfit", "font-family": "Sans-serif", "class": "outfit", "download_link": "lib/Outfit" },
    { "font-name": "Lexend", "font-family": "Sans-serif", "class": "lexend", "download_link": "lib/Lexend" },
    { "font-name": "Lato", "font-family": "Sans-serif", "class": "lato", "download_link": "lib/Lato" },
    { "font-name": "Metropolis", "font-family": "Sans-serif", "class": "metropolis", "download_link": "lib/Metropolis" },
    { "font-name": "San-Francisco", "font-family": "Sans-serif", "class": "san-francisco", "download_link": "lib/San-Francisco" },
    { "font-name": "Quicksand", "font-family": "Sans-serif", "class": "quicksand", "download_link": "lib/Quicksand" },
    { "font-name": "Sen", "font-family": "Sans-serif", "class": "sen", "download_link": "lib/Sen" },
    { "font-name": "Rubik", "font-family": "Sans-serif", "class": "rubik", "download_link": "lib/Rubik" },
    { "font-name": "Ubuntu", "font-family": "Sans-serif", "class": "ubuntu", "download_link": "lib/Ubuntu" },
    { "font-name": "FF-Mark", "font-family": "Sans-serif", "class": "ff-mark", "download_link": "lib/FF-Mark" }
    ];
    
    $(function () {
    let fontsList = $('#fonts-list');
    
    libfonts.forEach(font => {
    fontsList.append(`
    <div class="col-md-4 mt-2">
    <div class="card h-100">
        <div class="card-header">
            Font: ${font['font-name']} <sup> <i class="bi bi-patch-check-fill text-primary fa-10x fs-6"></i></sup>  / ${font['font-family']}
        </div>
        <div class="card-body ${font['class']}">
            <h5 class="text-primary">Normal</h5>
            <p>The quick brown fox jumps over the lazy dog.</p>
            <h5  class="text-primary">Uppercase</h5>
            <p class="text-uppercase">The quick brown fox jumps over the lazy dog.</p>
            <h5  class="text-primary">Bold</h5>
            <p class="fw-bold">The quick brown fox jumps over the lazy dog.</p>
        </div>
        <div class="card-footer">
            <button class="btn btn-sm btn-outline-primary rounded-pill download-font" data-download="${font['download_link']}">
             <i class="bi bi-cloud-download"></i>   Download
            </button>
        </div>
    </div>
    </div>
    `);
    });
    
    // Activate download button
    $(document).on('click', '.download-font', function () {
        const downloadLink = $(this).data('download');
        window.location.href = `${downloadLink}.zip`;  // Assuming the backend serves zip files directly
    });
    });