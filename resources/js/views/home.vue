<template>
    <div id="admin-panel-wrapper">
        <div id="admin-panel-sidebar">
            <div id="admin-panel-title">Example Name</div>

        </div>
        <div id="admin-panel-body">
            <div id="admin-panel-body-titlebar">
                <div id="admin-panel-titlebar-left">
                    <el-page-header content="detail">
                        <div slot="title"><i class="material-icons">forum</i></div>
                        <el-breadcrumb separator="/" slot="content">
                            <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
                            <el-breadcrumb-item><a href="/">promotion management</a></el-breadcrumb-item>
                            <el-breadcrumb-item>promotion list</el-breadcrumb-item>
                            <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
                        </el-breadcrumb>
                    </el-page-header>
                </div>
                <div id="admin-panel-titlebar-right">
                    <el-avatar size="medium"> user </el-avatar>
                    <el-link class="ml-2" target="_blank" :underline="false">Akalanka Kavinda</el-link>
                    <el-dropdown trigger="click" @command="showNotofication" size="medium">
                        <span class="el-dropdown-link">
                            <i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item command="settings">Settings</el-dropdown-item>
                            <el-dropdown-item command="logout" divided>Logout</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </div>
            <div id="admin-panel-body-content-wrap">
                <div id="admin-panel-body-content">
                    <transition>
                        <keep-alive>
                            <router-view></router-view>
                        </keep-alive>
                    </transition>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'App',
    data(){
        return{
            dragging: false,
            width: 250,

            tableData: [{
                date: '2016-05-03',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles'
            }, {
                date: '2016-05-02',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles'
            }
            ]
        }
    },
    methods: {
        lock(e){
            this.dragging = true;
            console.log('Locked');
        },
        unlock(e){
            this.dragging = false;
            console.log('Unlocked');
        },
        resize(e){
            if(this.dragging){
                console.log('Dragging..');
            }
        },
        showNotofication(cmd){
            console.log(cmd);
            this.$notify({
                title: 'Title',
                message: cmd
            });
        }
    }
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
    width: 250px;
    background-color:#545c64;
    flex-direction: column;
}

#admin-panel-body{
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    background-color:#eeeeee;

}

#admin-panel-title {
    display: flex;
    padding: 25px 20px;
    color: #d8a0ea;
    font-size: 18px;
    background-color: #545c64;
    border-radius: 5px;
}

#admin-panel-body-titlebar {
    width: 100%;
    display: flex;
    padding: 20px 20px 10px;
    box-sizing: border-box;
}

#admin-panel-body-content-wrap {
    display: flex;
    flex-grow: 1;
    width: 100%;
    overflow-y: scroll;
    padding: 10px 20px 20px;
    box-sizing: border-box;
}

#admin-panel-body-content {
	width: 100%;
	border-radius: 5px;
    height: 1000px;
    background: linear-gradient(to bottom, rgb(69, 104, 220), rgb(176, 106, 179));
	box-shadow: 0px 5px 5px 0px #c8c8c8;
}

#admin-panel-titlebar-left {
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    align-items: center;
}

#admin-panel-titlebar-right {
    display: flex;
    flex-direction: row;
    align-items: center;
}



</style>
