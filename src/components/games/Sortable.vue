<template>
    <div>
        <h4 v-if="game1WellDone" class="ma-4 font500">
            {{items.task2}}</h4>
        <h4 class="ma-4 font500" v-else>{{items.task1}}</h4>

        <v-layout row wrap justify-center>
            <v-flex xs12>
                <div class="mflex authors">
                    <h4 v-for="name in items.names">
                        {{name}}
                    </h4>
                </div>
                <draggable class="grey lighten-2 mflex authors" v-model="images" @end="onEnd1">
                    <div style="position: relative;"
                         v-for="(image,i) in images">
                        <v-fab-transition>
                            <v-btn v-show="image==truthImages[i]" :disabled="game1WellDone" class="green mt-3" dark icon
                                   absolute right small>
                                <v-icon>done</v-icon>
                            </v-btn>
                        </v-fab-transition>
                        <img :src="image" alt="">
                    </div>
                </draggable>

                <draggable v-if="game1WellDone" class="mflex authors grey lighten-2" v-model="plangs"
                           @end="onEnd"
                           style="width:100%;">


                    <div style="position: relative;cursor:pointer;" v-for="(item,i) in plangs">
                        <v-fab-transition>
                            <v-btn v-show="item == truthPlangs[i]" class="green mt-3" dark icon absolute right top
                                   small>
                                <v-icon>done</v-icon>
                            </v-btn>
                        </v-fab-transition>
                        <h4 class="primary--text font700">
                            {{item}}
                        </h4>
                    </div>
                </draggable>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
    import draggable from 'vuedraggable'

    export default {
        props: ['items'],
        data() {
            return {
                attempt1: 0,
                attempt2: 0,
                images: ["public/2/niklaus_virt.jpg", "public/2/rismus_lerdorf.jpg", "public/2/tomas_kurz.jpg", "public/2/denis_ritchi.jpg", "public/2/john_kemeni.jpg"],
                truthImages: ["public/2/denis_ritchi.jpg", "public/2/john_kemeni.jpg", "public/2/niklaus_virt.jpg", "public/2/rismus_lerdorf.jpg", "public/2/tomas_kurz.jpg"],
                plangs: ['C', 'PHP', 'Pascal', 'Basic', 'Basic'],
                truthPlangs: ['Basic', 'Basic', 'C', 'Pascal', 'PHP'],

            }
        },
        methods: {
            shuffle: function (a) {
                var j, x, i;
                for (i = a.length; i; i--) {
                    j = Math.floor(Math.random() * i);
                    x = a[i - 1];
                    a[i - 1] = a[j];
                    a[j] = x;
                }
                return a;
            },
            onEnd1() {
                this.attempt1++;
            },
            onEnd() {
                this.attempt2++;
                let res = 8 / (this.attempt1 + this.attempt2) * 100;
                res = res > 100 ? 100 : res;
                res = res < 0 ? 0 : res;
                if (this.gameOver) {
                    setTimeout(() => {
                        this.$router.push({
                            name: 'res',
                            params: {result: res, resId: this.$route.params.gameId}
                        });
                    }, 1500);
                }
            },
        },
        components: {
            draggable,
        },
        computed: {
            game1WellDone() {
                for (let i in this.images) {
                    if (this.images[i] != this.truthImages[i]) return false;
                }
                return true;
            },
            gameOver() {
                for (let i in this.plangs) {
                    if (this.plangs[i] != this.truthPlangs[i]) return false;
                }
                return true;
            }
        }
    }
</script>

<style lang="stylus">
    .authors h4
        width: 260px !important;
        text-align: center;

    .draggable h4
        width: 260px !important;
        text-align: center;

    .authors img
        width: 260px;
        height: 320px;
        padding: 10px;
        cursor: pointer;
</style>