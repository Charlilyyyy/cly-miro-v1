<script setup lang="ts">
import PlusIcon from '../../components/PlusIcon.vue';
import StickyNoteIcon from '../../components/StickyNoteIcon.vue';
import DocumentIcon from '../../components/DocumentIcon.vue';
import RedoIcon from '../../components/RedoIcon.vue';
import UndoIcon from '../../components/UndoIcon.vue';
import PersonPlusIcon from '../../components/PersonPlusIcon.vue';
import {App} from '../../app/app'

</script>

<template>
    <div class="bg-slate-100">
        <div class="flex">
            <div class="bg-slate-200 h-screen w-[50px]">
                <!-- <div class="flex justify-center py-4">
                    <img :src="App.baseUrl+'/img/tc-logo.png'" width="50" class="rounded-full" alt="logo">
                </div> -->
                <ul class="flex flex-col px-2 bg-white mt-20 mb-2 gap-2 p-2 shadow-md rounded-md">
                    <li class="flex felx-row rounded-md cursor-pointer bg-slate-100 px-2 py-2">
                        <span class="icon pt-1">
                            <StickyNoteIcon/>
                        </span>
                    </li>
                    <li class="flex felx-row rounded-md cursor-pointer hover:bg-slate-100 px-2 py-2">
                        <span class="icon pt-1">
                            <DocumentIcon/>
                        </span>
                    </li>
                </ul>
                <ul class="flex flex-col px-2 bg-white mb-2 rounded-md shadow-md gap-2 p-2">
                    <li class="flex felx-row bg-yellow-300 h-8 rounded-md gap-2 cursor-pointer">

                    </li>
                    <li class="flex felx-row bg-indigo-300 h-8 rounded-md gap-2 cursor-pointer">

                    </li>
                    <li class="flex felx-row bg-blue-300 h-8 rounded-md gap-2 cursor-pointer">

                    </li>
                    <li class="flex felx-row bg-pink-300 h-8 rounded-md gap-2 cursor-pointer">

                    </li>
                </ul>
                <ul class="flex flex-col px-2 bg-white mb-2 gap-2 p-2 rounded-md">
                    <li class="flex felx-row rounded-md cursor-pointer hover:bg-slate-100 px-2 py-2">
                        <span class="icon pt-1">
                            <RedoIcon/>
                        </span>
                    </li>
                    <li class="flex felx-row rounded-md cursor-pointer hover:bg-slate-100 px-2 py-2">
                        <span class="icon pt-1">
                            <UndoIcon/>
                        </span>
                    </li>
                </ul>
            </div>
            <div class="bg-slate-200 w-screen">
                <div class="flex justify-between p-2 mt-1">
                    <div class="bg-white p-2 px-3 py-2 gap-2 rounded-md shadow-md flex">
                        <img :src="App.baseUrl+'/img/tc-logo.png'" width="30" class="rounded-full" alt="logo"><span class="text-slate-300">|</span><span class="text-lg">Curr Project Name</span>
                    </div>
                    <div class="flex gap-2 bg-white p-2 px-2 py-2 rounded-md shadow-md">
                        <img :src="App.baseUrl+'/img/avatar.webp'" width="30" class="rounded-full border-2 shadow-md border-white" alt="">
                        <button class="flex gap-2 bg-blue-500 py-1 px-2 rounded-md text-white">
                            <PersonPlusIcon class="mt-1"/>
                            <span class="text-">Share</span>
                        </button>
                    </div>
                </div>
                <div class="flex px-4">
                    <h1 class="text-2xl">Project board main section</h1>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-4 gap-4 p-4">
                    <!-- list of ceated projects  -->

                </div>
            </div>
        </div>
    </div>
</template>
