import { useQuery, useQueryClient } from '@tanstack/react-query'
import { getSuggestions, respondSuggestion } from '@/lib/api'
import { useUIStore } from '@/store/useUIStore'
import { useT, type TKey } from '@/lib/i18n'
import SuggestionCard from './SuggestionCard'

export default function SuggestionBanner() {
  const queryClient = useQueryClient()
  const addToast = useUIStore((s) => s.addToast)
  const t = useT()

  const { data: suggestions = [] } = useQuery({
    queryKey: ['suggestions'],
    queryFn: getSuggestions,
  })

  const pending = suggestions.filter((s) => s.status === 'pending')

  if (pending.length === 0) return null

  async function handleRespond(id: number, action: 'accept' | 'reject' | 'snooze') {
    await respondSuggestion(id, action)
    await queryClient.invalidateQueries({ queryKey: ['suggestions'] })
    const messageKeys: Record<typeof action, TKey> = {
      accept: 'suggestions.accepted',
      reject: 'suggestions.rejected',
      snooze: 'suggestions.snoozed',
    }
    addToast(t(messageKeys[action]), 'success')
  }

  return (
    <div className="flex flex-col gap-2">
      <SuggestionCard suggestion={pending[0]} onRespond={handleRespond} />
    </div>
  )
}
