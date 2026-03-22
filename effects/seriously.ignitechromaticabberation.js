Seriously.plugin('ignitechromaticabberation', {
    inputs: {
        source: { type: 'image' },
        offset: { type: 'number', defaultValue: 0.005 }
    },
    shader: function (inputs) {
        return {
            uniforms: inputs,
            fragment: `
precision mediump float;
uniform sampler2D source;
uniform float offset;
varying vec2 vTexCoord;
void main(){
    float r=texture2D(source,vTexCoord+vec2(offset,0.0)).r;
    float g=texture2D(source,vTexCoord).g;
    float b=texture2D(source,vTexCoord-vec2(offset,0.0)).b;
    gl_FragColor=vec4(r,g,b,1.0);
}`
        };
    }
});
