<template>
    <div id="admin-panel-wrapper" ref="dashboard">
        <div id="admin-panel-sidebar">
            <div id="admin-panel-title">Example Name</div>
            <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                background-color="#394046"
                text-color="#e8e8e8"
                active-text-color="#ffc72a">
            <el-submenu index="1">
                <template slot="title">
                <i class="el-icon-location"></i>
                <span>Navigator One</span>
                </template>
                <el-menu-item-group title="Group One">
                <el-menu-item index="1-1">item one</el-menu-item>
                <el-menu-item index="1-2">item one</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="Group Two">
                <el-menu-item index="1-3">item three</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                <template slot="title">item four</template>
                <el-menu-item index="1-4-1">item one</el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span>Navigator Two</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
                <i class="el-icon-document"></i>
                <span>Navigator Three</span>
            </el-menu-item>
            <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span>Navigator Four</span>
            </el-menu-item>
            </el-menu>
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
            <div id="admin-panel-body-content-wrap" >
                <div id="admin-panel-body-content" v-loading="loading">
                    <transition>
                        <keep-alive>
                            <router-view ></router-view>
                        </keep-alive>
                    </transition>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Dashboard',
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
            }],
            loading : false,
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
            v_inst.swapComponent(v_inst.$options.components.SignIn);
        },
        handleOpen(){

        },
        handleClose(){

        }
    }
}
</script>

<style>

#admin-panel-wrapper{
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
}

#admin-panel-sidebar{
    display: flex;
    width: 250px;
    background-color:#394046;
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
    background-color: #394046;
    border-radius: 5px;
}

#admin-panel-body-titlebar {
    width: 100%;
    display: flex;
    padding: 15px;
    box-sizing: border-box;
}

#admin-panel-body-content-wrap {
    display: flex;
    flex-grow: 1;
    width: 100%;
    overflow: hidden;
    padding: 0 15px 15px;
    box-sizing: border-box;
}

#admin-panel-body-content {
	width: 100%;
	border-radius: 5px;
    background: white;
    padding: 15px;
    overflow-y: auto;
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
