Seriously.plugin('ignite2dtransform', {
    inputs: {
        source: { type: 'image' },
        scale: { type: 'number', defaultValue: 1 },
        angle: { type: 'number', defaultValue: 0 },
        tx: { type: 'number', defaultValue: 0 },
        ty: { type: 'number', defaultValue: 0 }
    },
    shader: function (inputs) {
        return {
            uniforms: inputs,
            fragment: `
precision mediump float;
uniform sampler2D source;
uniform float scale,angle,tx,ty;
varying vec2 vTexCoord;
void main(){
    vec2 uv=vTexCoord-0.5;
    float s=sin(angle),c=cos(angle);
    uv=mat2(c,-s,s,c)*uv/scale;
    uv+=0.5+vec2(tx,ty);
    gl_FragColor=texture2D(source,uv);
}`
        };
    }
});
