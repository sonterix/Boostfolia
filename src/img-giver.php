<?php
if(isset($_POST['index'])){
    $index = $_POST['index'];
    
    $all = [
        'all' => [
            '1-photography.jpg', '1-design.jpg', '1-branding.jpg', '1-mobile-app.jpg',
            '2-photography.jpg', '2-design.jpg', '2-branding.jpg', '2-mobile-app.jpg',
            '3-photography.jpg', '3-design.jpg', '3-branding.jpg', '3-mobile-app.jpg',
            '4-photography.jpg', '4-design.jpg', '4-branding.jpg', '4-mobile-app.jpg',
            
        ],
        'photography' => ['1-photography.jpg', '2-photography.jpg', '3-photography.jpg', '4-photography.jpg', '5-photography.jpg'],
        'design' => ['1-design.jpg', '2-design.jpg', '3-design.jpg', '4-design.jpg', '5-design.jpg'],
        'branding' => ['1-branding.jpg', '2-branding.jpg', '3-branding.jpg', '4-branding.jpg', '5-branding.jpg'],
        'mobileApp' => ['1-mobile-app.jpg', '2-mobile-app.jpg', '3-mobile-app.jpg', '4-mobile-app.jpg', '5-mobile-app.jpg']
    ];
    

    switch ($index) {
        case 0:
            echo json_encode($all['all']);
            break;
        case 1:
            echo json_encode($all['photography']);
            break;
        case 2:       
            echo json_encode($all['design']);
            break;
        case 3:
            echo json_encode($all['branding']);
            break;
        case 4:
            echo json_encode($all['mobileApp']);
            break;
    }

} else {
    echo 'Error 403';
}
