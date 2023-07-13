<template>
    <footer class="Footer">
        <div class="Footer-footer">
            <div>
                <p class="Footer-text">Motorola y la M estilizada son marcas registradas de Motorola Trademark Holdings, LLC. </p>
                <span class="Footer-text">Esta pagina esta hecha por fines didacticos.</span>
            </div>
            <div>
                <span class="Footer-text">© 2023</span>
            </div>
        </div>
    </footer>
</template>
<script lang='ts' setup>

</script>
<style lang='scss' scoped>
    .Footer{
        width: 100%;
        padding: var(--pad);
        background-color: var(--black);
        &-footer{
            max-width: var(--max-width);
            margin: auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 1.25rem;
        }
        &-text{
            font-size: 1.2em;
            color: var(--white);
            font-family: var(--secundary-font);
        }
    }
</style>