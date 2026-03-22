(function (root, factory) {
    if (typeof define === 'function' && define.amd) define(['seriously'], factory);
    else factory(root.Seriously);
}(this, function (Seriously) {

Seriously.plugin('uni.rgbseparation', {
    inputs: {
        source: { type: 'image' },
        red: { type: 'number', defaultValue: 0.005, min: -1, max: 1 },
        green: { type: 'number', defaultValue: 0.0, min: -1, max: 1 },
        blue: { type: 'number', defaultValue: -0.005, min: -1, max: 1 }
    },
    shader: function () {
        return {
            fragment: `
precision mediump float;
varying vec2 vTexCoord;
uniform sampler2D source;
uniform float red;
uniform float green;
uniform float blue;
void main(){
vec2 uv=vTexCoord;
float r=texture2D(source,uv+vec2(red,0.0)).r;
float g=texture2D(source,uv+vec2(green,0.0)).g;
float b=texture2D(source,uv+vec2(blue,0.0)).b;
gl_FragColor=vec4(r,g,b,1.0);
}`
        };
    }
});

Seriously.plugin('uni.shake', {
    inputs: {
        source: { type: 'image' },
        amount: { type: 'number', defaultValue: 0.01, min: 0, max: 1 },
        time: { type: 'number', defaultValue: 0 }
    },
    shader: function () {
        return {
            fragment: `
precision mediump float;
varying vec2 vTexCoord;
uniform sampler2D source;
uniform float amount;
uniform float time;
float rand(vec2 co){return fract(sin(dot(co.xy,vec2(12.9898,78.233)))*43758.5453);}
void main(){
vec2 uv=vTexCoord;
uv.x+= (rand(vec2(time,uv.y))-0.5)*amount;
uv.y+= (rand(vec2(uv.x,time))-0.5)*amount;
gl_FragColor=texture2D(source,uv);
}`
        };
    }
});

Seriously.plugin('uni.vhs', {
    inputs: {
        source: { type: 'image' },
        distortion: { type: 'number', defaultValue: 0.02, min: 0, max: 1 }
    },
    shader: function () {
        return {
            fragment: `
precision mediump float;
varying vec2 vTexCoord;
uniform sampler2D source;
uniform float distortion;
void main(){
vec2 uv=vTexCoord;
uv.x+=sin(uv.y*50.0)*distortion;
gl_FragColor=texture2D(source,uv);
}`
        };
    }
});

Seriously.plugin('uni.chromaticabberation', {
    inputs: {
        source: { type: 'image' },
        offset: { type: 'number', defaultValue: 0.003, min: -1, max: 1 }
    },
    shader: function () {
        return {
            fragment: `
precision mediump float;
varying vec2 vTexCoord;
uniform sampler2D source;
uniform float offset;
void main(){
vec2 uv=vTexCoord;
float r=texture2D(source,uv+vec2(offset,0.0)).r;
float g=texture2D(source,uv).g;
float b=texture2D(source,uv-vec2(offset,0.0)).b;
gl_FragColor=vec4(r,g,b,1.0);
}`
        };
    }
});

Seriously.plugin('uni.tint', {
    inputs: {
        source: { type: 'image' },
        color: { type: 'color', defaultValue: [1,0,0,1] }
    },
    shader: function () {
        return {
            fragment: `
precision mediump float;
varying vec2 vTexCoord;
uniform sampler2D source;
uniform vec4 color;
void main(){
vec4 c=texture2D(source,vTexCoord);
gl_FragColor=c*color;
}`
        };
    }
});

Seriously.plugin('uni.repeattile', {
    inputs: {
        source: { type: 'image' },
        repeat: { type: 'number', defaultValue: 4, min: 1, max: 20 }
    },
    shader: function () {
        return {
            fragment: `
precision mediump float;
varying vec2 vTexCoord;
uniform sampler2D source;
uniform float repeat;
void main(){
vec2 uv=fract(vTexCoord*repeat);
gl_FragColor=texture2D(source,uv);
}`
        };
    }
});

Seriously.plugin('uni.rgbradial', {
    inputs: {
        source: { type: 'image' },
        strength: { type: 'number', defaultValue: 0.02, min: 0, max: 1 }
    },
    shader: function () {
        return {
            fragment: `
precision mediump float;
varying vec2 vTexCoord;
uniform sampler2D source;
uniform float strength;
void main(){
vec2 uv=vTexCoord-0.5;
float dist=length(uv);
vec2 dir=normalize(uv);
float r=texture2D(source,vTexCoord+dir*strength*dist).r;
float g=texture2D(source,vTexCoord).g;
float b=texture2D(source,vTexCoord-dir*strength*dist).b;
gl_FragColor=vec4(r,g,b,1.0);
}`
        };
    }
});

Seriously.plugin('uni.rgbdisplacement', {
    inputs: {
        source: { type: 'image' },
        map: { type: 'image' },
        scale: { type: 'number', defaultValue: 0.05, min: 0, max: 1 }
    },
    shader: function () {
        return {
            fragment: `
precision mediump float;
varying vec2 vTexCoord;
uniform sampler2D source;
uniform sampler2D map;
uniform float scale;
void main(){
vec2 disp=texture2D(map,vTexCoord).rg-0.5;
vec2 uv=vTexCoord+disp*scale;
gl_FragColor=texture2D(source,uv);
}`
        };
    }
});

Seriously.plugin('uni.wave', {
    inputs: {
        source: { type: 'image' },
        amplitude: { type: 'number', defaultValue: 0.02 },
        frequency: { type: 'number', defaultValue: 10 }
    },
    shader: function () {
        return {
            fragment: `
precision mediump float;
varying vec2 vTexCoord;
uniform sampler2D source;
uniform float amplitude;
uniform float frequency;
void main(){
vec2 uv=vTexCoord;
uv.y+=sin(uv.x*frequency)*amplitude;
gl_FragColor=texture2D(source,uv);
}`
        };
    }
});

Seriously.plugin('uni.vortex', {
    inputs: {
        source: { type: 'image' },
        strength: { type: 'number', defaultValue: 2 }
    },
    shader: function () {
        return {
            fragment: `
precision mediump float;
varying vec2 vTexCoord;
uniform sampler2D source;
uniform float strength;
void main(){
vec2 uv=vTexCoord-0.5;
float r=length(uv);
float a=atan(uv.y,uv.x)+r*strength;
vec2 coord=vec2(cos(a),sin(a))*r+0.5;
gl_FragColor=texture2D(source,coord);
}`
        };
    }
});

Seriously.plugin('uni.arraygun', {
    inputs: {
        source: { type: 'image' },
        count: { type: 'number', defaultValue: 5 }
    },
    shader: function () {
        return {
            fragment: `
precision mediump float;
varying vec2 vTexCoord;
uniform sampler2D source;
uniform float count;
void main(){
vec2 uv=vTexCoord*count;
uv=fract(uv);
gl_FragColor=texture2D(source,uv);
}`
        };
    }
});

Seriously.plugin('uni.colorlut', {
    inputs: {
        source: { type: 'image' },
        lut: { type: 'image' }
    },
    shader: function () {
        return {
            fragment: `
precision mediump float;
varying vec2 vTexCoord;
uniform sampler2D source;
uniform sampler2D lut;
void main(){
vec4 c=texture2D(source,vTexCoord);
gl_FragColor=texture2D(lut,c.rg);
}`
        };
    }
});

Seriously.plugin('uni.colorcube', {
    inputs: {
        source: { type: 'image' },
        intensity: { type: 'number', defaultValue: 1 }
    },
    shader: function () {
        return {
            fragment: `
precision mediump float;
varying vec2 vTexCoord;
uniform sampler2D source;
uniform float intensity;
void main(){
vec4 c=texture2D(source,vTexCoord);
c.rgb=pow(c.rgb,vec3(intensity));
gl_FragColor=c;
}`
        };
    }
});

Seriously.plugin('uni.colorize', {
    inputs: {
        source: { type: 'image' },
        color: { type: 'color', defaultValue: [0,1,0,1] }
    },
    shader: function () {
        return {
            fragment: `
precision mediump float;
varying vec2 vTexCoord;
uniform sampler2D source;
uniform vec4 color;
void main(){
vec4 c=texture2D(source,vTexCoord);
float l=dot(c.rgb,vec3(0.299,0.587,0.114));
gl_FragColor=vec4(color.rgb*l,1.0);
}`
        };
    }
});

Seriously.plugin('uni.channelmix', {
    inputs: {
        source: { type: 'image' },
        r: { type: 'number', defaultValue: 1 },
        g: { type: 'number', defaultValue: 1 },
        b: { type: 'number', defaultValue: 1 }
    },
    shader: function () {
        return {
            fragment: `
precision mediump float;
varying vec2 vTexCoord;
uniform sampler2D source;
uniform float r;
uniform float g;
uniform float b;
void main(){
vec4 c=texture2D(source,vTexCoord);
gl_FragColor=vec4(c.r*r,c.g*g,c.b*b,1.0);
}`
        };
    }
});

Seriously.plugin('uni.negative', {
    inputs: {
        source: { type: 'image' }
    },
    shader: function () {
        return {
            fragment: `
precision mediump float;
varying vec2 vTexCoord;
uniform sampler2D source;
void main(){
vec4 c=texture2D(source,vTexCoord);
gl_FragColor=vec4(1.0-c.rgb,1.0);
}`
        };
    }
});

Seriously.plugin('uni.hsl', {
    inputs: {
        source: { type: 'image' },
        hue: { type: 'number', defaultValue: 0 },
        sat: { type: 'number', defaultValue: 1 },
        lum: { type: 'number', defaultValue: 1 }
    },
    shader: function () {
        return {
            fragment: `
precision mediump float;
varying vec2 vTexCoord;
uniform sampler2D source;
uniform float hue;
uniform float sat;
uniform float lum;
void main(){
vec4 c=texture2D(source,vTexCoord);
c.rgb*=vec3(sat);
c.rgb+=hue;
c.rgb*=lum;
gl_FragColor=c;
}`
        };
    }
});

Seriously.plugin('uni.chromauvdistortiob', {
    inputs: {
        source: { type: 'image' },
        strength: { type: 'number', defaultValue: 0.03 }
    },
    shader: function () {
        return {
            fragment: `
precision mediump float;
varying vec2 vTexCoord;
uniform sampler2D source;
uniform float strength;
void main(){
vec2 uv=vTexCoord;
uv+=vec2(uv.y,uv.x)*strength;
gl_FragColor=texture2D(source,uv);
}`
        };
    }
});

Seriously.plugin('uni.addnoise', {
    inputs: {
        source: { type: 'image' },
        amount: { type: 'number', defaultValue: 0.05 }
    },
    shader: function () {
        return {
            fragment: `
precision mediump float;
varying vec2 vTexCoord;
uniform sampler2D source;
uniform float amount;
float rand(vec2 co){return fract(sin(dot(co.xy,vec2(12.9898,78.233)))*43758.5453);}
void main(){
vec4 c=texture2D(source,vTexCoord);
float n=rand(vTexCoord)*amount;
gl_FragColor=vec4(c.rgb+n,1.0);
}`
        };
    }
});

}));
