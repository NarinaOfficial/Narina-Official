Seriously.plugin('revision-autopaint', function () {
var plugin = this;
plugin.attributes = {
brushSize: { type: 'number', default: 10 },
opacity: { type: 'number', default: 1 },
threshold: { type: 'number', default: 0.5 }
};
plugin.shader = function (inputs, shader) {
shader.uniforms.brushSize = plugin.attributes.brushSize;
shader.uniforms.opacity = plugin.attributes.opacity;
shader.uniforms.threshold = plugin.attributes.threshold;
};
});

Seriously.plugin('revision-autoblur', function () {
var plugin = this;
plugin.attributes = {
radius: { type: 'number', default: 5 },
amount: { type: 'number', default: 1 }
};
plugin.shader = function (inputs, shader) {
shader.uniforms.radius = plugin.attributes.radius;
shader.uniforms.amount = plugin.attributes.amount;
};
});

Seriously.plugin('revision-autocolor', function () {
var plugin = this;
plugin.attributes = {
hue: { type: 'number', default: 0 },
saturation: { type: 'number', default: 1 },
brightness: { type: 'number', default: 1 }
};
plugin.shader = function (inputs, shader) {
shader.uniforms.hue = plugin.attributes.hue;
shader.uniforms.saturation = plugin.attributes.saturation;
shader.uniforms.brightness = plugin.attributes.brightness;
};
});

Seriously.plugin('revision-autocontrast', function () {
var plugin = this;
plugin.attributes = {
contrast: { type: 'number', default: 1 }
};
plugin.shader = function (inputs, shader) {
shader.uniforms.contrast = plugin.attributes.contrast;
};
});

Seriously.plugin('revision-autocrop', function () {
var plugin = this;
plugin.attributes = {
left: { type: 'number', default: 0 },
right: { type: 'number', default: 0 },
top: { type: 'number', default: 0 },
bottom: { type: 'number', default: 0 }
};
plugin.shader = function (inputs, shader) {
shader.uniforms.left = plugin.attributes.left;
shader.uniforms.right = plugin.attributes.right;
shader.uniforms.top = plugin.attributes.top;
shader.uniforms.bottom = plugin.attributes.bottom;
};
});

Seriously.plugin('revision-autodistort', function () {
var plugin = this;
plugin.attributes = {
strength: { type: 'number', default: 0.5 }
};
plugin.shader = function (inputs, shader) {
shader.uniforms.strength = plugin.attributes.strength;
};
});

Seriously.plugin('revision-autofade', function () {
var plugin = this;
plugin.attributes = {
fade: { type: 'number', default: 1 }
};
plugin.shader = function (inputs, shader) {
shader.uniforms.fade = plugin.attributes.fade;
};
});

Seriously.plugin('revision-autoglow', function () {
var plugin = this;
plugin.attributes = {
intensity: { type: 'number', default: 1 },
radius: { type: 'number', default: 10 }
};
plugin.shader = function (inputs, shader) {
shader.uniforms.intensity = plugin.attributes.intensity;
shader.uniforms.radius = plugin.attributes.radius;
};
});

Seriously.plugin('revision-autonoise', function () {
var plugin = this;
plugin.attributes = {
amount: { type: 'number', default: 0.1 }
};
plugin.shader = function (inputs, shader) {
shader.uniforms.amount = plugin.attributes.amount;
};
});

Seriously.plugin('revision-autopixelate', function () {
var plugin = this;
plugin.attributes = {
size: { type: 'number', default: 8 }
};
plugin.shader = function (inputs, shader) {
shader.uniforms.size = plugin.attributes.size;
};
});

Seriously.plugin('revision-autosharpen', function () {
var plugin = this;
plugin.attributes = {
amount: { type: 'number', default: 1 }
};
plugin.shader = function (inputs, shader) {
shader.uniforms.amount = plugin.attributes.amount;
};
});

Seriously.plugin('revision-autosharpness', function () {
var plugin = this;
plugin.attributes = {
sharpness: { type: 'number', default: 1 }
};
plugin.shader = function (inputs, shader) {
shader.uniforms.sharpness = plugin.attributes.sharpness;
};
});

Seriously.plugin('revision-autosobel', function () {
var plugin = this;
plugin.attributes = {
edge: { type: 'number', default: 1 }
};
plugin.shader = function (inputs, shader) {
shader.uniforms.edge = plugin.attributes.edge;
};
});

Seriously.plugin('revision-autosolarize', function () {
var plugin = this;
plugin.attributes = {
threshold: { type: 'number', default: 0.5 }
};
plugin.shader = function (inputs, shader) {
shader.uniforms.threshold = plugin.attributes.threshold;
};
});

Seriously.plugin('revision-autosplit', function () {
var plugin = this;
plugin.attributes = {
offset: { type: 'number', default: 5 }
};
plugin.shader = function (inputs, shader) {
shader.uniforms.offset = plugin.attributes.offset;
};
});

Seriously.plugin('revision-autostretch', function () {
var plugin = this;
plugin.attributes = {
factor: { type: 'number', default: 1 }
};
plugin.shader = function (inputs, shader) {
shader.uniforms.factor = plugin.attributes.factor;
};
});

Seriously.plugin('revision-autotint', function () {
var plugin = this;
plugin.attributes = {
color: { type: 'color', default: '#ffffff' },
amount: { type: 'number', default: 0.5 }
};
plugin.shader = function (inputs, shader) {
shader.uniforms.color = plugin.attributes.color;
shader.uniforms.amount = plugin.attributes.amount;
};
});

Seriously.plugin('revision-autotransform', function () {
var plugin = this;
plugin.attributes = {
scale: { type: 'number', default: 1 },
rotation: { type: 'number', default: 0 }
};
plugin.shader = function (inputs, shader) {
shader.uniforms.scale = plugin.attributes.scale;
shader.uniforms.rotation = plugin.attributes.rotation;
};
});

Seriously.plugin('revision-autovignette', function () {
var plugin = this;
plugin.attributes = {
strength: { type: 'number', default: 0.5 },
radius: { type: 'number', default: 0.5 }
};
plugin.shader = function (inputs, shader) {
shader.uniforms.strength = plugin.attributes.strength;
shader.uniforms.radius = plugin.attributes.radius;
};
});

Seriously.plugin('revision-autowarp', function () {
var plugin = this;
plugin.attributes = {
warp: { type: 'number', default: 0.5 }
};
plugin.shader = function (inputs, shader) {
shader.uniforms.warp = plugin.attributes.warp;
};
});

Seriously.plugin('revision-wave', function () {
var plugin = this;
plugin.attributes = {
amplitude: { type: 'number', default: 10 },
frequency: { type: 'number', default: 1 },
speed: { type: 'number', default: 1 }
};
plugin.shader = function (inputs, shader) {
shader.uniforms.amplitude = plugin.attributes.amplitude;
shader.uniforms.frequency = plugin.attributes.frequency;
shader.uniforms.speed = plugin.attributes.speed;
};
});
