'use strict';

import {LuaFunction, MTAFunction, ScriptSide} from "../defs";

export var DxFunctionDefinitions = new Array<MTAFunction>();

let tmpDef : MTAFunction;

tmpDef = new MTAFunction;
tmpDef.label = "dxCreateFont";
tmpDef.description = "This function creates a DX font element that can be used in dxDrawText. Successful font creation is not guaranteed, and may fail due to hardware or memory limitations.";
tmpDef.returnType = "element";
tmpDef.args = ["string filepath[", "int size=9", "bool bold=false", "string quality=\"proof\" ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
DxFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dxGetPixelColor";
tmpDef.description = "This function gets the color of a single pixel from pixels contained in a string. It only works with 'plain' format pixels.";
tmpDef.returnType = "int r,g,b,a";
tmpDef.args = ["string pixels", "int x", "int y"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
DxFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dxDrawText";
tmpDef.description = "Draws a string of text on the screen for one frame. In order for the text to stay visible continuously, you need to call this function with the same parameters on each frame update (see onClientRender).";
tmpDef.returnType = "bool";
tmpDef.args = ["string text", "float left", "float top [", "float right=left", "float bottom=top", "int color=white", "float scale=1", "mixed font=\"default\"", "string alignX=\"left\"", "string alignY=\"top\"", "bool clip=false", "bool wordBreak=false", "bool postGUI=false", "bool colorCoded=false", "bool subPixelPositioning=false", "float fRotation=0", "float fRotationCenterX=0", "float fRotationCenterY=0 ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
DxFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dxDrawImageSection";
tmpDef.description = "Differing from dxDrawImage, this function only draws a part of an image on the screen for a single frame. In order for the image to stay visible continuously, you need to call this function with the same parameters on each frame update (see onClientRender).";
tmpDef.returnType = "bool";
tmpDef.args = ["float posX", "float posY", "float width", "float height", "float u", "float v", "float usize", "float vsize", "mixed image", "[ float rotation = 0", "float rotationCenterOffsetX = 0", "float rotationCenterOffsetY = 0", "int color = white", "bool postGUI = false ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
DxFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dxGetPixelsSize";
tmpDef.description = "This function gets the dimensions of pixels contained in a string. It works with all pixel formats.";
tmpDef.returnType = "int int";
tmpDef.args = ["string pixels"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
DxFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dxSetShaderTessellation";
tmpDef.description = "This function sets the amount of geometric sub-division to use when drawing a shader element with dxDrawImage.";
tmpDef.returnType = "bool";
tmpDef.args = ["element theShader", "int tessellationX", "int tessellationY"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
DxFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dxCreateScreenSource";
tmpDef.description = "This function creates a screen source, which is a special type of texture that contains the screen as rendered by GTA";
tmpDef.returnType = "element";
tmpDef.args = ["int width", "int height"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
DxFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dxCreateTexture";
tmpDef.description = "This function creates a texture element that can be used in the dxDraw functions.";
tmpDef.returnType = "element";
tmpDef.args = ["string filepath [", "string textureFormat = \"argb\"", "bool mipmaps = true", "string textureEdge = \"wrap\" ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
DxFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dxDrawLine3D";
tmpDef.description = "This function draws a 3D line between two points in the 3D world - rendered for one frame. This should be used in conjunction with onClientRender in order to display continuously.";
tmpDef.returnType = "bool";
tmpDef.args = ["float startX", "float startY", "float startZ", "float endX", "float endY", "float endZ[", "int color = white", "int width = 1", "bool postGUI = false ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
DxFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dxDrawLine";
tmpDef.description = "This function draws a 2D line across the screen - rendered for one frame. This should be used in conjunction with onClientRender in order to display continuously.";
tmpDef.returnType = "bool";
tmpDef.args = ["int startX", "int startY", "int endX", "int endY", "int color", "[float width=1", "bool postGUI=false]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
DxFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dxCreateShader";
tmpDef.description = "This function creates a shader element that can be used in the dxDraw functions. Successful shader creation is not guaranteed unless the Effect File contains a fallback technique which will work on every PC in the universe.";
tmpDef.returnType = "element, string";
tmpDef.args = ["string filepath [", "float priority = 0", "float maxDistance = 0", "bool layered = false", "string elementTypes = \"world,vehicle,object,other\" ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
DxFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dxGetMaterialSize";
tmpDef.description = "This gets the dimensions of the supplied material element.";
tmpDef.returnType = "int, int [, int]";
tmpDef.args = ["element material"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
DxFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dxGetStatus";
tmpDef.description = "This function gets information about various internal datum";
tmpDef.returnType = "table";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
DxFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dxSetTexturePixels";
tmpDef.description = "This function sets the pixels of a texture element. It can be used with a standard texture, render target or screen source. ";
tmpDef.returnType = "bool";
tmpDef.args = ["[ int surfaceIndex = 0", "] element texture", "string pixels [", "int x = 0", "int y = 0", "int width = 0", "int height = 0 ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
DxFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dxDrawRectangle";
tmpDef.description = "This function draws a 2D rectangle across the screen - rendered for one frame. This should be used in conjunction with onClientRender in order to display continuously.";
tmpDef.returnType = "bool";
tmpDef.args = ["float startX", "float startY", "float width", "float height [", "int color = white", "bool postGUI = false", "bool subPixelPositioning = false ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
DxFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dxSetShaderTransform";
tmpDef.description = " This function applies a 3D transformation to a shader element when it is drawn with dxDrawImage.";
tmpDef.returnType = "bool";
tmpDef.args = ["element theShader", "float rotationX", "float rotationY", "float rotationZ", "[ float rotationCenterOffsetX = 0", "float rotationCenterOffsetY = 0", "float rotationCenterOffsetZ = 0", "bool bRotationCenterOffsetOriginIsScreen = false", "float perspectiveCenterOffsetX = 0", "float perspectiveCenterOffsetY = 0", "bool bPerspectiveCenterOffsetOriginIsScreen = false ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
DxFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dxSetTestMode";
tmpDef.description = "This function is used for testing scripts written using guiCreateFont, dxCreateFont, dxCreateShader and dxCreateRenderTarget.";
tmpDef.returnType = "bool";
tmpDef.args = ["string testMode"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
DxFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dxGetBlendMode";
tmpDef.description = "This function returns the current blend mode for the dxDraw functions set with dxSetBlendMode.";
tmpDef.returnType = "string";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
DxFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dxUpdateScreenSource";
tmpDef.description = "This function updates the contents of a screen source texture with the screen output from GTA";
tmpDef.returnType = "bool";
tmpDef.args = ["element screenSource [", "bool resampleNow = false ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
DxFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dxSetShaderValue";
tmpDef.description = "This sets a named parameter for a shader element";
tmpDef.returnType = "bool";
tmpDef.args = ["element theShader", "string parameterName", "mixed value"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
DxFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dxDrawMaterialLine3D";
tmpDef.description = "This function draws a textured 3D line between two points in the 3D world - rendered for one frame. This should be used in conjunction with onClientPreRender in order to display continuously.Draws an Image ( \"test.png\" Download : test.png ) from the Position 0,0,3 to 0,0,15";
tmpDef.returnType = "bool";
tmpDef.args = ["float startX", "float startY", "float startZ", "float endX", "float endY", "float endZ", "element material", "float width", "[ int color = white", "float faceTowardX", "float faceTowardY", "float faceTowardZ ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
DxFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dxCreateRenderTarget";
tmpDef.description = "This function creates a render target element, which is a special type of texture that can be drawn on with the dx functions. Successful render target creation is not guaranteed, and may fail due to hardware or memory limitations.";
tmpDef.returnType = "element";
tmpDef.args = ["int width", "int height [", "bool withAlpha = false ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
DxFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dxGetTextWidth";
tmpDef.description = "This function retrieves the theoretical width of a certain piece of text, if it were to be drawn using dxDrawText.This will show you the width of a message in a normal chatbox sent by a player";
tmpDef.returnType = "float";
tmpDef.args = ["string text", "[float scale=1", "mixed font=\"default\"", "bool bColorCoded=false]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
DxFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dxGetPixelsFormat";
tmpDef.description = "This function returns the format of pixels contained in a string.";
tmpDef.returnType = "string";
tmpDef.args = ["string pixels"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
DxFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dxSetBlendMode";
tmpDef.description = "This function sets the current blend mode for the dxDraw functions. Changing the blend mode can increase the quality when drawing text or certain other images to a render target. As a general guide use modulate_add when drawing text to a render target, and add when drawing the render target to the screen. Don't forget to restore the default blend at the end.";
tmpDef.returnType = "bool";
tmpDef.args = ["string blendMode"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
DxFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dxGetTexturePixels";
tmpDef.description = "This function fetches the pixels from a texture element. It can be used with a standard texture, render target or screen source.";
tmpDef.returnType = "string";
tmpDef.args = ["[ int surfaceIndex = 0", "] element texture [", "int x = 0", "int y = 0", "int width = 0", "int height = 0 ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
DxFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dxConvertPixels";
tmpDef.description = "This function converts pixels from one format to another.";
tmpDef.returnType = "string";
tmpDef.args = ["string pixels", "string newFormat [", "int quality = 80 ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
DxFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dxDrawMaterialSectionLine3D";
tmpDef.description = "This function draws a textured 3D line between two points in the 3D world - rendered for one frame. This should be used in conjunction with onClientPreRender in order to display continuously.";
tmpDef.returnType = "bool";
tmpDef.args = ["float startX", "float startY", "float startZ", "float endX", "float endY", "float endZ", "float u", "float v", "float usize", "float vsize", "element material", "int width", "[ int color = white", "float faceTowardX", "float faceTowardY", "float faceTowardZ ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
DxFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dxSetAspectRatioAdjustmentEnabled";
tmpDef.description = "This function allows for the positioning of dxDraw calls to be automatically adjusted according to the client's aspect ratio setting. This lasts for a single execution of an event handler for one of the following events: onClientRender, onClientPreRender and onClientHUDRender. So the function has to be called every frame, just like dxDraws.";
tmpDef.returnType = "bool";
tmpDef.args = ["bool bEnabled [", "float sourceRatio = 4/3 ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
DxFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dxSetPixelColor";
tmpDef.description = "This function sets the color of a single pixel for pixels contained in a string. It only works with 'plain' format pixels.";
tmpDef.returnType = "bool";
tmpDef.args = ["string pixels", "int x", "int y", "int r", "int g", "int b [", "int a = 255 ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
DxFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dxSetRenderTarget";
tmpDef.description = "This function changes the drawing destination for the dx functions. It can be used to select a previously created render target, or if called with no arguments, restore drawing directly to the screen.";
tmpDef.returnType = "bool";
tmpDef.args = ["[ element renderTarget", "bool clear = false ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
DxFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dxGetFontHeight";
tmpDef.description = "This function retrieves the theoretical height of a certain piece of text, if it were to be drawn using dxDrawText.";
tmpDef.returnType = "int";
tmpDef.args = ["[float scale=1", "mixed font=\"default\"]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
DxFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dxDrawImage";
tmpDef.description = "Draws an image on the screen for a single frame. In order for the image to stay visible continuously, you need to call this function with the same parameters on each frame update (see onClientRender).";
tmpDef.returnType = "bool";
tmpDef.args = ["float posX", "float posY", "float width", "float height", "mixed image", "[float rotation = 0", "float rotationCenterOffsetX = 0", "float rotationCenterOffsetY = 0,int color = tocolor(255, 255, 255, 255), bool postGUI = false]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
DxFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "dxSetTextureEdge";
tmpDef.description = "This functions allows you to change the edge handling after creating the texture.";
tmpDef.returnType = "bool";
tmpDef.args = ["texture theTexture", "string textureEdge", "[int border-color]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
DxFunctionDefinitions.push(tmpDef);