let scene, camera, renderer, line;

function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth/window.innerHeight,
        0.1,
        1000
    );
    camera.position.set( 0, 0, 100 );
    camera.lookAt( 0, 0, 0 );

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const material = new THREE.LineBasicMaterial({color: 0x00ff00});
    const points = []
    points.push(new THREE.Vector3(10,0,0));
    points.push(new THREE.Vector3(0,10,0));
    points.push(new THREE.Vector3(-10,0,0));
    
    geometry = new THREE.BufferGeometry().setFromPoints(points);
    line = new THREE.Line(geometry, material);

    scene.add(line)
}

function onResize() {
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
    requestAnimationFrame(animate);
    
    renderer.render(scene, camera)
}

window.addEventListener('resize', onResize)
init()
animate()