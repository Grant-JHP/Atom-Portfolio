function Init() {

    // Init Scene
    var scene = new THREE.Scene();

    // Init Camera
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 4;

    // Init Renderer
    var renderer = new THREE.WebGLRenderer({
        antialias: true
    });

    // Renderer Settings
    renderer.setClearColor("#000000");
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement); // Append DOM

    //
    // Init Geometry
    //

    // Init Cube
    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshBasicMaterial({
        color: "#433F81"
    });
    var cube = new THREE.Mesh(geometry, material);
    
    scene.add(cube);

    // Start Animation
    function MainLoop() {

        // Start Frame
        requestAnimationFrame(MainLoop);
    
        // Update Animation
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
    
        // Render Scene
        renderer.render(scene, camera);
    };

    MainLoop();
};