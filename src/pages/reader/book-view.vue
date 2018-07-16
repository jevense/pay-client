<template>
    <imed-nav :title="this.$route.query.name">
        <iframe :src="url"></iframe>
    </imed-nav>
</template>

<script>
    import ImedNav from "../../components/imed-nav"

    export default {
        components: {ImedNav},
        name: "book-view",
        computed: {
            url() {
                let {name, sectionId, bookIndex, url} = this.$route.query
                let prefix = 'https://mvw-imed3.oss-cn-beijing.aliyuncs.com/Test'
                let ind = bookIndex.substr(0, 2)

                if (sectionId == null) {
                    return `${prefix}/${url}`
                } else {
                    let indPath = sectionId.padStart(2, '0')
                    return `${prefix}/${bookIndex}/${ind}_${indPath}/${ind}_${indPath}_01/${ind}_${indPath}_01.html`
                }
            }
        }
    }
</script>

<style scoped>
    iframe {
        position: absolute;
        width: 100%;
        height: 100%;
        border: 0;
    }
</style>
