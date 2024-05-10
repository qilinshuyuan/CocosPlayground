<template>
  <a-sub-menu v-if="menuHasChildren(item)" :key="`${item.id}`">
    <template #title>{{ item.zh_label }}</template>
    <template v-for="childrenItem in item.children || []" :key="childrenItem.id">
      <recursive-menu v-bind="$props" :item="childrenItem" />
    </template>
  </a-sub-menu>
  <a-menu-item v-if="!menuHasChildren(item)" :key="item.id">{{ item.zh_label }}</a-menu-item>
</template>

<script lang="ts" setup name="RecursiveMenu">
import type { Menu } from './interface'
interface Props {
  item: Menu
}
defineProps<Props>()

/**
 *  判断是否有子菜单
 * @param menuTreeItem 菜单项
 */
function menuHasChildren(menuTreeItem: Menu): boolean {
  return (
    // !menuTreeItem.meta?.hideChildrenInMenu &&
    Reflect.has(menuTreeItem, 'children') &&
    !!menuTreeItem.children &&
    menuTreeItem.children.length > 0
  )
}
</script>
