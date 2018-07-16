<template>
    <div>
        <header class="imed-bar">
            <div @click="back">
                <div>返回</div>
            </div>
            <h1 v-text="categoryList.name"></h1>
            <a class="icon" style="width: 0.8rem">&nbsp;</a>
        </header>
        <div class="header">
            <ul>
                <li :class="[{active:item.show}]" @click="changeLi(item)" v-for="item in categoryList.chapters">
                    {{item.name}}
                    <ul v-show="item.show">
                        <li v-for="a in item.sections" @click.stop="doThis(a)">
                            {{a.name}}
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import ImedNav from "../../components/imed-nav"

    export default {
        name: "category",
        components: {ImedNav},
        created() {
            // console.log(this.$route.params)
            let {isbn} = this.$route.params
            // console.log(isbn)
            // alert(isbn)
            this.$store.dispatch('categoryList', {isbn})
        },
        computed: {
            ...mapState({
                categoryList: state => state.category.categoryList
            }),
        },
        methods: {
            back() {
                WebCallApp("CmdGoBack")
            },
            changeLi(item) {
                this.categoryList.chapters.filter(i => i !== item).forEach(i => i.show = false)
                item.show = !item.show
                console.log(item.name)
                console.log(item)
            },
            doThis(a) {
                this.$router.push({
                    path: `/english/1/category/${a.id}`,
                    query: {
                        name: a.name,
                        sectionId: a.sectionId,
                        bookIndex: this.categoryList.bookIndex,
                        url: a.url
                    }
                })
            }
        }
    }
</script>

<style scoped lang="less">
    ul {
        padding: 0;
        > li {
            list-style: none;
        }
    }

    .header {
        background-color: #ff5722;
        color: #ffffff;
        > ul {
            width: 100%;
            > li {
                width: 100%;
                border: 1px solid #ffffff;
                cursor: pointer; // float: left;
                text-align: center;
                line-height: 60px;
                &:hover {
                    background-color: #ff9800;
                }
                > ul {
                    width: 100%;
                    background: red;
                    li {
                        &:hover {
                            background: #c31111;
                        }
                    }
                }
            }
            .active {
                background-color: #ff9800;
            }
        }
    }
</style>
