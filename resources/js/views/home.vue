<template>
    <div id="admin-panel-wrapper">
        <div id="admin-panel-sidebar"></div>
        <div id="admin-panel-resize"></div>
        <div id="admin-panel-body"></div>
    </div>
</template>

<script>
export default {
    name: 'Home'
}
</script>

<style>

html{
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    overflow: hidden;
}

body{
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    overflow: hidden;
}

#admin-panel-wrapper{
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
}

#admin-panel-sidebar{
    display: flex;
    width: 300px;
    background-color:#aaa;
}

#admin-panel-body{
    display: flex;
    flex-grow: 1;
    background-color:#ffb8b8;
}

element {
	display: flex;
	width: 2px;
	cursor: col-resize;
	background-color: #646464;
}

</style>
