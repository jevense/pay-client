<template>
    <imed-nav :title="title">
        <div class="list-block media-list">
            <div class="item-content">
                <div class="item-media">
                    <img src="https://mall.imed.org.cn/upload/coverImages/imed-exam-2018-1.jpg">
                </div>
                <div class="item-inner">
                    <div class="imed-item-title">中医科</div>
                    <div class="imed-item-sub-title"><span style="color: red">2990</span> 阅点</div>
                    <div class="imed-item-sub-title">作者：医视界</div>
                    <div class="imed-item-sub-title">图书类型：通关包</div>
                    <div class="imed-item-sub-title">大小：2M</div>
                    <div class="imed-item-sub-title">出版机构：医视界</div>
                </div>
            </div>
        </div>
        <section>
            <span class="imed-title">简介</span>
            <article v-html=""></article>
        </section>
        <footer>
            <a v-if="own" class="button button-fill button-big button-danger">已购买，请到已获得图书列表查看</a>
            <router-link to="/book/10/order" v-else class="button button-fill button-big button-danger">
                立即购买
            </router-link>
        </footer>
    </imed-nav>
</template>

<script>
    import ImedNav from '../../components/imed-nav'

    export default {
        name: "book-item",
        data() {
            return {
                title: '图书详情',
                own: false,
            }
        },
        components: {ImedNav},
        methods: {
            buy() {
                console.log('=======')
            }
        }
    }
</script>

<style scoped>

    .list-block {
        margin: 0.5rem 0;
    }

    .list-block .item-content {
        padding-left: 0.5rem;
        background-color: white;
    }

    .list-block.media-list .item-inner {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: flex-start;

    }

    .imed-item-title {
        font-size: 0.9rem;
    }

    .imed-item-sub-title {
        font-size: 0.8rem;
        color: #666;
    }

    .item-media > img {
        width: 5.5rem;
    }

    .imed-title {
        color: red;
    }

    section {
        padding: 0.5rem;
        background-color: white;
    }

    footer {
        position: fixed;
        width: 100%;
        bottom: 0;
    }

    .button {
        border-radius: 0;
    }
</style>