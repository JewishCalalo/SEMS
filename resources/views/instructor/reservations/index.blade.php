<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('My Reservations') }}
        </h2>
    </x-slot>

    <div class="py-12 bg-rose-50/40">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <!-- Breadcrumbs -->
            <x-breadcrumbs :items="[
                ['label' => 'Dashboard', 'url' => route('instructor.dashboard')],
                ['label' => 'My Reservations']
            ]" />

            <!-- Header Section -->
            <div class="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 p-6 rounded-lg shadow-sm mb-6">
                <div class="flex justify-between items-center">
                    <div>
                        <h3 class="text-2xl font-bold text-gray-900 mb-2">My Reservations</h3>
                        <p class="text-gray-600 font-medium">View and manage your equipment reservations.</p>
                    </div>
                    <div class="flex space-x-3">
                        <a href="{{ route('instructor.reservations.create') }}" 
                           class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                            <svg class="-ml-1 mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                            </svg>
                            Create Reservation
                        </a>
                    </div>
                </div>
            </div>

            <!-- Back/Actions Row -->
            <div class="mb-4 flex justify-end">
                <a href="{{ url()->previous() }}" class="inline-flex items-center px-4 py-2 bg-gray-600 text-white text-sm font-medium rounded-md hover:bg-gray-700 focus:ring-2 focus:ring-gray-300 shadow">
                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                    Back
                </a>
                <button type="button" onclick="openInstructorReservationsReport()" class="ml-3 inline-flex items-center px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-md hover:bg-red-700 focus:ring-2 focus:ring-red-300 shadow">
                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                    Generate Report
                </button>
            </div>

            <!-- Action Legend -->
            <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
                <h3 class="text-sm font-medium text-gray-900 mb-3">Action Legend</h3>
                <div class="grid grid-cols-2 md:grid-cols-2 gap-4">
                    <div class="flex items-center space-x-2">
                        <div style="background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%); color: white; width: 32px; height: 32px; border-radius: 12px; display: inline-flex; align-items: center; justify-content: center; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);">
                            <svg style="width: 16px; height: 16px;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                            </svg>
                        </div>
                        <span class="text-sm text-gray-600">View Details</span>
                    </div>
                    <div class="flex items-center space-x-2">
                        <div style="background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%); color: white; width: 32px; height: 32px; border-radius: 12px; display: inline-flex; align-items: center; justify-content: center; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);">
                            <svg style="width: 16px; height: 16px;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <span class="text-sm text-gray-600">Cancel (Pending Only)</span>
                    </div>
                </div>
            </div>

            <!-- Reservations Table -->
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="bg-red-50 border-l-4 border-red-500 px-6 py-4">
                    <h4 class="text-lg font-semibold text-red-800 flex items-center">
                        <svg class="w-5 h-5 mr-2 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                        </svg>
                        Reservation History
                    </h4>
                </div>
                
                @if($reservations->count() > 0)
                    <div class="overflow-x-auto">
                        <table class="min-w-full divide-y divide-gray-200">
                            <thead class="bg-red-600">
                                <tr>
                                    <th class="px-6 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">
                                        Reservation ID
                                    </th>
                                    <th class="px-6 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">
                                        Status
                                    </th>
                                    <th class="px-6 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">
                                        Borrow Date and Time
                                    </th>
                                    <th class="px-6 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">
                                        Return Date and Time
                                    </th>
                                    <th class="px-6 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">
                                        Equipment Count
                                    </th>
                                    <th class="px-6 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">
                                        Created
                                    </th>
                                    <th class="px-6 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200">
                                @foreach($reservations as $reservation)
                                    <tr class="hover:bg-gray-50">
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            <a href="{{ route('instructor.reservations.show', $reservation) }}" 
                                               class="text-lg font-semibold text-gray-900 hover:text-red-600 transition-colors">
                                                {{ $reservation->reservation_code }}
                                            </a>
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            <span class="inline-flex px-3 py-1 text-xs font-semibold rounded-full 
                                                @if($reservation->status === 'approved') bg-green-100 text-green-800 border border-green-200
                                                @elseif($reservation->status === 'pending') bg-yellow-100 text-yellow-800 border border-yellow-200
                                                @elseif($reservation->status === 'rejected') bg-red-100 text-red-800 border border-red-200
                                                @elseif($reservation->status === 'picked_up') bg-blue-100 text-blue-800 border border-blue-200
                                                @elseif($reservation->status === 'returned') bg-purple-100 text-purple-800 border border-purple-200
                                                @elseif($reservation->status === 'completed') bg-gray-100 text-gray-800 border border-gray-200
                                                @else bg-gray-100 text-gray-800 border border-gray-200 @endif">
                                                {{ ucfirst(str_replace('_', ' ', $reservation->status)) }}
                                            </span>
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            @if($reservation->borrow_date)
                                                <div class="font-medium">{{ \Carbon\Carbon::parse($reservation->borrow_date)->format('M d, Y') }}</div>
                                                @if($reservation->borrow_time)
                                                    <div class="text-gray-500 text-xs">{{ \Carbon\Carbon::parse($reservation->borrow_time)->format('g:i A') }}</div>
                                                @endif
                                            @else
                                                <span class="text-gray-400">N/A</span>
                                            @endif
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            @if($reservation->return_date)
                                                <div class="font-medium">{{ \Carbon\Carbon::parse($reservation->return_date)->format('M d, Y') }}</div>
                                                @if($reservation->return_time)
                                                    <div class="text-gray-500 text-xs">{{ \Carbon\Carbon::parse($reservation->return_time)->format('g:i A') }}</div>
                                                @endif
                                            @else
                                                <span class="text-gray-400">N/A</span>
                                            @endif
                                        </td>
                                        <td class="px-6 py-4 text-sm text-gray-900">
                                            @if($reservation->items && $reservation->items->count() > 0)
                                                <div class="space-y-1">
                                                    @foreach($reservation->items as $item)
                                                        <div class="text-xs">
                                                            <span class="font-medium text-gray-900">
                                                                @if($item->equipment->brand && $item->equipment->model)
                                                                    {{ $item->equipment->brand }} {{ $item->equipment->model }}
                                                                @elseif($item->equipment->brand)
                                                                    {{ $item->equipment->brand }}
                                                                @elseif($item->equipment->model)
                                                                    {{ $item->equipment->model }}
                                                                @else
                                                                    {{ $item->equipment->description ?? 'Unknown Equipment' }}
                                                                @endif
                                                            </span>
                                                            <span class="text-gray-600">
                                                                ({{ $item->quantity_requested }})
                                                            </span>
                                                        </div>
                                                    @endforeach
                                                </div>
                                            @else
                                                <span class="text-gray-400">No equipment</span>
                                            @endif
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {{ $reservation->created_at->format('M d, Y') }}
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                            <!-- Action Buttons -->
                                            <div class="flex items-center space-x-2">
                                                <!-- View Details Button -->
                                                <a href="{{ route('instructor.reservations.show', $reservation) }}" 
                                                   style="background: linear-gradient(to right, #3b82f6, #2563eb); color: white; width: 40px; height: 40px; border-radius: 8px; display: inline-flex; align-items: center; justify-content: center; text-decoration: none; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); transition: all 0.2s;"
                                                   onmouseover="this.style.background='linear-gradient(to right, #2563eb, #1d4ed8)'; this.style.transform='translateY(-2px)'; this.style.boxShadow='0 4px 8px rgba(0, 0, 0, 0.2)'"
                                                   onmouseout="this.style.background='linear-gradient(to right, #3b82f6, #2563eb)'; this.style.transform='translateY(0)'; this.style.boxShadow='0 2px 4px rgba(0, 0, 0, 0.1)'"
                                                   title="View Details">
                                                    <svg style="width: 20px; height: 20px;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                                                    </svg>
                                                </a>
                                                
                                                @if($reservation->status === 'pending')
                                                    <!-- Cancel Button -->
                                                    <button onclick="showCancelConfirmation('{{ $reservation->id }}', '{{ $reservation->user->name ?? 'User' }}', '{{ $reservation->reservation_code }}')"
                                                            style="background: linear-gradient(to right, #ef4444, #dc2626); color: white; width: 40px; height: 40px; border-radius: 8px; display: inline-flex; align-items: center; justify-content: center; text-decoration: none; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); transition: all 0.2s; border: none; cursor: pointer;"
                                                            onmouseover="this.style.background='linear-gradient(to right, #dc2626, #b91c1c)'; this.style.transform='translateY(-2px)'; this.style.boxShadow='0 4px 8px rgba(0, 0, 0, 0.2)'"
                                                            onmouseout="this.style.background='linear-gradient(to right, #ef4444, #dc2626)'; this.style.transform='translateY(0)'; this.style.boxShadow='0 2px 4px rgba(0, 0, 0, 0.1)'"
                                                            title="Cancel Reservation">
                                                        <svg style="width: 20px; height: 20px;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                        </svg>
                                                    </button>
                                                @endif
                                            </div>
                                        </td>
                                    </tr>
                                @endforeach
                            </tbody>
                        </table>
                    </div>
                    
                    <!-- Pagination -->
                    <div class="bg-white px-4 py-3 border-t border-gray-200 sm:px-6">
                        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                            <div class="flex-1 order-2 sm:order-1">
                                {{ $reservations->appends(request()->query())->links() }}
                            </div>
                            <div class="order-1 sm:order-2 mb-4 sm:mb-0 sm:ml-auto">
                                <div class="flex items-center space-x-2">
                                    <span class="text-sm text-gray-700">Rows per page:</span>
                                    <select id="per-page-select" class="px-3 py-1 pr-8 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-red-500 focus:border-red-500 bg-white" onchange="changePerPage(this.value)">
                                        <option value="10" {{ request('per_page', 15) == 10 ? 'selected' : '' }}>10</option>
                                        <option value="15" {{ request('per_page', 15) == 15 ? 'selected' : '' }}>15</option>
                                        <option value="25" {{ request('per_page', 15) == 25 ? 'selected' : '' }}>25</option>
                                        <option value="50" {{ request('per_page', 15) == 50 ? 'selected' : '' }}>50</option>
                                        <option value="100" {{ request('per_page', 15) == 100 ? 'selected' : '' }}>100</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                @else
                    <div class="text-center py-12">
                        <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                        </svg>
                        <h3 class="mt-2 text-sm font-medium text-gray-900">No reservations</h3>
                        <p class="mt-1 text-sm text-gray-500">Get started by creating a new reservation.</p>
                        <div class="mt-6">
                            <a href="{{ route('instructor.reservations.create') }}" class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                                <svg class="-ml-1 mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                                </svg>
                                Create Reservation
                            </a>
                        </div>
                    </div>
                @endif
            </div>
        </div>
    </div>

    <script>
        // Show success modal if there's a success message
        @if(session('success'))
            document.addEventListener('DOMContentLoaded', function() {
                Swal.fire({
                    title: '',
                    html: `
                        <div class="bg-green-500 text-white p-4 -m-6 -mt-6 mb-4 rounded-t-lg" style="margin-left: -24px; margin-right: -24px; margin-top: -24px;">
                            <h2 class="text-xl font-bold text-center">Reservation Submitted Successfully!</h2>
                        </div>
                        <div class="text-center">
                            <div class="mb-4">
                                <div class="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-3">
                                    <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                            </div>
                            <p class="text-gray-700">{{ session('success') }}</p>
                        </div>
                        <div class="flex justify-center mt-6">
                            <button type="button" class="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors transform hover:scale-105" onclick="Swal.close()">
                                OK
                            </button>
                        </div>
                    `,
                    showConfirmButton: false,
                    showCancelButton: false,
                    customClass: {
                        popup: 'swal-custom-popup'
                    }
                });
            });
        @endif

        // Show error modal if there's an error message
        @if(session('error'))
            document.addEventListener('DOMContentLoaded', function() {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: '{{ session('error') }}',
                    confirmButtonText: 'OK',
                    customClass: {
                        popup: 'swal-custom-popup'
                    }
                });
            });
        @endif

        // Cancel confirmation modal
        function showCancelConfirmation(reservationId, userName, reservationCode) {
            Swal.fire({
                title: '',
                html: `
                    <div class="bg-orange-500 text-white p-4 -m-6 -mt-6 mb-4 rounded-t-lg" style="margin-left: -24px; margin-right: -24px; margin-top: -24px;">
                        <h2 class="text-xl font-bold text-center">Cancel Reservation</h2>
                    </div>
                    <div class="text-center">
                        <div class="mb-4">
                            <div class="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-3">
                                <svg class="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
                                </svg>
                            </div>
                        </div>
                        <p class="text-gray-700 text-lg font-medium">Are you sure you want to cancel this reservation?</p>
                        <p class="text-gray-600 text-sm mt-2">Reservation Code: <strong>${reservationCode}</strong></p>
                        <p class="text-gray-600 text-sm">This action will cancel your reservation and restore equipment availability.</p>
                    </div>
                    <div class="flex justify-center space-x-4 mt-6">
                        <button type="button" class="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors transform hover:scale-105" onclick="Swal.close()">
                            Keep Reservation
                        </button>
                        <button type="button" class="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors transform hover:scale-105" onclick="cancelReservation('${reservationId}')">
                            Yes, Cancel
                        </button>
                    </div>
                `,
                showConfirmButton: false,
                showCancelButton: false,
                customClass: {
                    popup: 'swal-custom-popup'
                }
            });
        }

        // Function to toggle custom reason textarea
        function toggleCustomReason() {
            const reasonSelect = document.getElementById('cancel_reason_select');
            const customReasonDiv = document.getElementById('custom_reason_div');
            const customReasonInput = document.getElementById('cancel_remarks_input');

            if (reasonSelect.value === 'other') {
                customReasonDiv.classList.remove('hidden');
                customReasonInput.required = true;
            } else {
                customReasonDiv.classList.add('hidden');
                customReasonInput.required = false;
                customReasonInput.value = '';
            }
        }

        // Function to handle reservation cancellation
        function cancelReservation(reservationId) {
            // No reason required for instructor's own reservation cancellation
            let remarks = 'Instructor cancelled their own reservation';

            // Show loading
            Swal.fire({
                title: 'Cancelling...',
                text: 'Please wait while we cancel your reservation.',
                allowOutsideClick: false,
                showConfirmButton: false,
                didOpen: () => {
                    Swal.showLoading();
                }
            });

            // Make AJAX request
            fetch(`/instructor/reservations/${reservationId}/cancel`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
                    'X-Requested-With': 'XMLHttpRequest'
                },
                body: JSON.stringify({
                    remarks: remarks
                })
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    Swal.fire({
                        title: '',
                        html: `
                            <div class="bg-green-500 text-white p-4 -m-6 -mt-6 mb-4 rounded-t-lg" style="margin-left: -24px; margin-right: -24px; margin-top: -24px;">
                                <h2 class="text-xl font-bold text-center">Reservation Cancelled</h2>
                            </div>
                            <div class="text-center">
                                <div class="mb-4">
                                    <div class="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-3">
                                        <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </div>
                                </div>
                                <p class="text-gray-700 text-lg font-medium">Your reservation has been cancelled successfully.</p>
                            </div>
                            <div class="flex justify-center mt-6">
                                <button type="button" class="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors transform hover:scale-105" onclick="Swal.close(); window.location.reload();">
                                    OK
                                </button>
                            </div>
                        `,
                        showConfirmButton: false,
                        showCancelButton: false,
                        customClass: {
                            popup: 'swal-custom-popup'
                        }
                    });
                } else {
                    Swal.fire({
                        title: '',
                        html: `
                            <div class="bg-red-500 text-white p-4 -m-6 -mt-6 mb-4 rounded-t-lg" style="margin-left: -24px; margin-right: -24px; margin-top: -24px;">
                                <h2 class="text-xl font-bold text-center">Cancellation Failed</h2>
                            </div>
                            <div class="text-center">
                                <div class="mb-4">
                                    <div class="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-3">
                                        <svg class="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                                        </svg>
                                    </div>
                                </div>
                                <p class="text-gray-700 text-lg font-medium">${data.message || 'Failed to cancel reservation. Please try again.'}</p>
                            </div>
                            <div class="flex justify-center mt-6">
                                <button type="button" class="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors transform hover:scale-105" onclick="Swal.close()">
                                    OK
                                </button>
                            </div>
                        `,
                        showConfirmButton: false,
                        showCancelButton: false,
                        customClass: {
                            popup: 'swal-custom-popup'
                        }
                    });
                }
            })
            .catch(error => {
                console.error('Error:', error);
                Swal.fire({
                    title: '',
                    html: `
                        <div class="bg-red-500 text-white p-4 -m-6 -mt-6 mb-4 rounded-t-lg" style="margin-left: -24px; margin-right: -24px; margin-top: -24px;">
                            <h2 class="text-xl font-bold text-center">Cancellation Failed</h2>
                        </div>
                        <div class="text-center">
                            <div class="mb-4">
                                <div class="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-3">
                                    <svg class="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                                    </svg>
                                </div>
                            </div>
                            <p class="text-gray-700 text-lg font-medium">An error occurred while cancelling the reservation. Please try again.</p>
                        </div>
                        <div class="flex justify-center mt-6">
                            <button type="button" class="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors transform hover:scale-105" onclick="Swal.close()">
                                OK
                            </button>
                        </div>
                    `,
                    showConfirmButton: false,
                    showCancelButton: false,
                    customClass: {
                        popup: 'swal-custom-popup'
                    }
                });
            });
        }

        // Function to change rows per page
        function changePerPage(perPage) {
            const url = new URL(window.location);
            url.searchParams.set('per_page', perPage);
            url.searchParams.delete('page'); // Reset to first page
            window.location.href = url.toString();
        }
    </script>

    <script>
        function openInstructorReservationsReport() {
            Swal.fire({
                
                html: `
                 <div class="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-4 -mx-6 -mt-6 mb-6 rounded-t-lg">
                    <div class="flex items-center">
                        <svg class="w-6 h-6 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                        </svg>
                        <h3 class="text-lg font-semibold flex-grow">Generate Reservations Report</h3>
                    </div>
                </div>

                <form id="reportForm" method="POST" action="{{ route('instructor.reports.export') }}" target="_blank">
                    <input type="hidden" name="_token" value="{{ csrf_token() }}">
                    <input type="hidden" name="type" value="reservations">
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Start Date</label>
                            <input type="date" name="start_date" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">End Date</label>
                            <input type="date" name="end_date" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Export Format</label>
                            <select name="format" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500">
                                <option value="pdf">PDF Document</option>
                                <option value="excel">Excel Spreadsheet</option>
                            </select>
                        </div>
                    </div>
                </form>
                `,
                showCancelButton: true,
                confirmButtonText: 'Generate Report',
                cancelButtonText: 'Cancel',
                confirmButtonColor: '#059669',
                cancelButtonColor: '#6b7280',
                width: '500px',
                showCloseButton: false,
                allowOutsideClick: false,
                preConfirm: function() {
                    // Submit the form via AJAX to ensure POST method
                    const form = document.getElementById('reportForm');
                    const formData = new FormData(form);
                    
                    // Create a form and submit it in a new tab
                    const newForm = document.createElement('form');
                    newForm.method = 'POST';
                    newForm.action = form.action;
                    newForm.target = '_blank';
                    newForm.style.display = 'none';
                    
                    // Add all form data
                    for (let [key, value] of formData.entries()) {
                        const input = document.createElement('input');
                        input.type = 'hidden';
                        input.name = key;
                        input.value = value;
                        newForm.appendChild(input);
                    }
                    
                    document.body.appendChild(newForm);
                    newForm.submit();
                    document.body.removeChild(newForm);
                    
                    return false; // Prevent SweetAlert from closing automatically
                }
            });
        }
    </script>
</x-app-layout>


