<template>
  <div class="demo">
    <a-layout style="height: 100%">
      <a-layout-sider
        breakpoint="lg"
        collapsed-width="0"
        style="padding: 20px 10px; background: #fff"
      >
        <div>
          <a-space direction="vertical" style="width: 100%">
            <!-- 官方/非官方 -->
            <a-radio-group
              v-model:value="officialKey"
              size="default"
              button-style="solid"
              @change="onOfficialChange"
              style="width: 100%"
            >
              <a-radio-button
                :value="item.value"
                style="width: 50%"
                v-for="(item, index) in officialTabs"
                :key="item.value"
                >{{ item.text }}</a-radio-button
              >
            </a-radio-group>
            <!-- 2D/3D -->
            <a-radio-group
              v-model:value="gameModeKey"
              size="default"
              style="width: 100%"
              @change="gameModalChange"
            >
              <a-radio-button
                :value="item.value"
                style="width: 50%"
                v-for="(item, index) in gameModeTabs"
                :key="item.value"
                >{{ item.text }}</a-radio-button
              >
            </a-radio-group>
            <a-input-search
              v-model:value="searchVal"
              :placeholder="t('demo.search.placeholder')"
              @search="onSearch"
            />
          </a-space>
        </div>

        <a-menu
          v-model:selectedKeys="selectedKeys"
          v-model:openKeys="openKeys"
          theme="light"
          mode="inline"
          @click="handleClick"
          style="border: 0"
          v-if="menuList.length"
        >
          <template v-for="item in menuList" :key="item.id">
            <RecursiveMenu :item="item" />
          </template>
        </a-menu>
        <div class="empty" v-else>
          <a-empty />
        </div>
      </a-layout-sider>
      <a-layout>
        <a-layout-content :style="{ margin: '24px 16px 0' }">
          <a-space direction="vertical" style="width: 100%">
            <a-card :title="dataDetail.title">
              <template #extra>
                <a-space style="width: 100%">
                  <a-button>
                    <template #icon> <qrcode-outlined /> </template>
                    {{ t('demo.handleBtns.qrcode') }}</a-button
                  >
                  <a-button>
                    <template #icon> <eye-outlined /> </template>
                    {{ t('demo.handleBtns.viewCode') }}</a-button
                  >
                  <a-button type="primary">
                    <template #icon> <DownloadOutlined /> </template>

                    {{ t('demo.handleBtns.downloadCode') }}</a-button
                  >
                </a-space>
              </template>
              Inner Card content
            </a-card>
            <!-- <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">content</div> -->
            <a-card>
              <div>{{ dataDetail.detail }}</div>
              <!-- <p>巴拉巴拉巴拉</p>
              <p>巴拉巴拉巴拉</p>
              <p>巴拉巴拉巴拉</p> -->
            </a-card>
          </a-space>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>
<script lang="ts" setup>
import type { MenuProps, RadioChangeEvent } from 'ant-design-vue'
import { i18n } from '@/locales/setupI18n'
import { GameMode, OfficialType } from './enums'
import RecursiveMenu from '@/components/RecursiveMenu.vue'
import type { Menu } from '@/components/interface'
import { getDataById, getMunusByType } from './controller/menuHandle'

interface DataDetail {
  title: string | null
  demoLink: string | null
  codeLink: string | null
  qrLink: string | null
  detail: string | null
}

const t = i18n.global.t as (key: string) => string
const menuList = ref<Menu[]>([])

const dataDetail:DataDetail = reactive({
  title: null,
  demoLink: null,
  codeLink: null,
  qrLink: null,
  detail: null
})
const reset = () => {
  dataDetail.title = null
  dataDetail.demoLink = null
  dataDetail.codeLink = null
  dataDetail.qrLink = null
  dataDetail.detail = null
}
/**
 *  官方类型tabs
 */
const officialTabs = ref([
  {
    text: t('demo.officialTabs.official'),
    value: OfficialType.OFFICIAL
  },
  {
    text: t('demo.officialTabs.unOfficial'),
    value: OfficialType.UNOFFICIAL
  }
])
/**
 *  游戏模式tabs
 */
const gameModeTabs = ref([
  {
    text: t('demo.gameModeTabs.twoD'),
    value: GameMode.TWO_D
  },
  {
    text: t('demo.gameModeTabs.threeD'),
    value: GameMode.THREE_D
  }
])
/**
 * 搜索框值
 */
const searchVal = ref<string>('')
/**
 * 官方类型key
 */
const officialKey = ref<OfficialType>(OfficialType.OFFICIAL)
/**
 * 游戏模式key
 */
const gameModeKey = ref<GameMode>(GameMode.TWO_D)

/**
 * 官方/非官方切换
 * @param e
 */
function onOfficialChange(e: RadioChangeEvent) {
  // const value: OfficialType = e.target.value
  gameModeKey.value = GameMode.TWO_D
  reset()
  searchVal.value = ''
  getList()
}
/**
 *  游戏模式切换
 * @param e
 */
function gameModalChange(e: RadioChangeEvent) {
  reset()
  searchVal.value = ''
  getList()
}
/**
 * 选中的key
 */
const selectedKeys = ref<string[]>([])
/**
 * 展开的key
 */
const openKeys = ref<string[]>([])
/**
 * 搜索
 * @param searchValue
 */
const onSearch = (searchValue?: string) => {
  console.log('use value', searchValue)
  console.log('or use this.value', searchVal.value)
}
/**
 * 点击事件
 */
const handleClick: MenuProps['onClick'] = (e) => {
  const detail = getDataById(e.key as string)
  if (!detail) return
  dataDetail.title = detail.title
  dataDetail.demoLink = detail.demoLink
  dataDetail.codeLink = detail.codeLink
  dataDetail.qrLink = detail.qrLink
  dataDetail.detail = detail.detail
}
function getList() {
  menuList.value = getMunusByType({
    officialType: officialKey.value,
    gameMode: gameModeKey.value
  }) as Menu[]
}
onMounted(() => {
  getList()
})
</script>
<style lang="less" scoped>
::v-deep(.ant-menu-item, .ant-menu) {
  border-radius: 0;
}
.demo {
  height: 100%;
}
#components-layout-demo-responsive .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}

.site-layout-sub-header-background {
  background: #fff;
}

.site-layout-background {
  background: #fff;
}

[data-theme='dark'] .site-layout-sub-header-background {
  background: #141414;
}
.empty {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
