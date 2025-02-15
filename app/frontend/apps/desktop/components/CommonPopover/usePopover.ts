// Copyright (C) 2012-2024 Zammad Foundation, https://zammad-foundation.org/

import { computed, shallowRef } from 'vue'
import type { ShallowRef, Ref } from 'vue'
import type { CommonPopoverInstance } from './types.ts'

export const usePopover = (
  popoverRef?: Ref<CommonPopoverInstance | undefined>,
) => {
  const popover: ShallowRef<CommonPopoverInstance | undefined> =
    popoverRef || shallowRef()
  const popoverTarget: ShallowRef<HTMLDivElement | undefined> = shallowRef()

  const isOpen = computed(() => popover.value?.isOpen)

  const open = () => {
    popover.value?.openPopover()
  }

  const close = () => {
    popover.value?.closePopover()
  }

  const toggle = () => {
    popover.value?.togglePopover()
  }

  return {
    popover,
    popoverTarget,
    open,
    close,
    toggle,
    isOpen,
  }
}
