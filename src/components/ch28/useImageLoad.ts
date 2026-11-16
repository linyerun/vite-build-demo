// useImageLoad.ts
import { ref, onMounted, type Ref } from 'vue'

export function useImageLoad(imgRef: Ref<HTMLImageElement | null>) {
    const isLoaded = ref(false)

    onMounted(() => {
        const img = imgRef.value
        if (!img) return

        if (img.complete) {
            isLoaded.value = true
        } else {
            img.onload = () => {
                isLoaded.value = true
            }
        }
    })

    return { isLoaded }
}