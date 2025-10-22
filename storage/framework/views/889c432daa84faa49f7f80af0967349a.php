<?php
    $incident = $stolenLostEquipment->incidentReport;
?>
<?php if (isset($component)) { $__componentOriginal9ac128a9029c0e4701924bd2d73d7f54 = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal9ac128a9029c0e4701924bd2d73d7f54 = $attributes; } ?>
<?php $component = App\View\Components\AppLayout::resolve([] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('app-layout'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\App\View\Components\AppLayout::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes([]); ?>
     <?php $__env->slot('header', null, []); ?> 
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            <?php echo e(__('Missing Equipment Details')); ?>

        </h2>
     <?php $__env->endSlot(); ?>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 space-y-6">
                    <?php
                        $resolvedIncident = $incident ?? \App\Models\IncidentReport::query()
                            ->when($stolenLostEquipment->reservation_id, function($q) use ($stolenLostEquipment) {
                                $q->where('reservation_id', $stolenLostEquipment->reservation_id);
                            })
                            ->where(function($q) use ($stolenLostEquipment) {
                                $q->whereJsonContains('equipment_instances', $stolenLostEquipment->equipment_instance_id)
                                  ->orWhere('equipment_instance_id', $stolenLostEquipment->equipment_instance_id);
                            })
                            ->latest('id')
                            ->first();
                    ?>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h4 class="text-lg font-semibold text-gray-900 mb-2">Equipment</h4>
                            <p class="text-sm text-gray-700"><?php echo e($stolenLostEquipment->equipmentInstance->equipment->brand); ?> <?php echo e($stolenLostEquipment->equipmentInstance->equipment->model); ?> (<?php echo e($stolenLostEquipment->equipmentInstance->instance_code); ?>)</p>
                        </div>
                        <div>
                            <h4 class="text-lg font-semibold text-gray-900 mb-2">Borrower</h4>
                            <p class="text-sm text-gray-900 font-semibold"><?php echo e($stolenLostEquipment->borrower_name); ?></p>
                            <p class="text-xs text-gray-500"><?php echo e($stolenLostEquipment->borrower_email); ?></p>
                        </div>
                    </div>

                    <?php
                        $incidentFallbackDescription = $stolenLostEquipment->incident_description ?? '';
                        $incidentDescription = $resolvedIncident && !empty($resolvedIncident->description) ? $resolvedIncident->description : $incidentFallbackDescription;
                    ?>

                    <?php if(!empty($incidentDescription) || ($resolvedIncident && $stolenLostEquipment->reservation && $stolenLostEquipment->reservation->user && $stolenLostEquipment->reservation->user->role === 'instructor')): ?>
                        <div class="border-t pt-4">
                            <h4 class="text-lg font-semibold text-gray-900 mb-3">Incident Description</h4>
                            <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                                <?php if(!empty($incidentDescription)): ?>
                                    <p class="text-sm text-gray-700"><?php echo e($incidentDescription); ?></p>
                                <?php else: ?>
                                    <p class="text-sm text-gray-500 italic">No description available</p>
                                <?php endif; ?>
                                
                                <?php if($resolvedIncident && $stolenLostEquipment->reservation && $stolenLostEquipment->reservation->user && $stolenLostEquipment->reservation->user->role === 'instructor'): ?>
                                    <div class="mt-4 pt-4 border-t border-yellow-300">
                                        <a href="<?php echo e(route('incident-reports.show', $resolvedIncident->id)); ?>" 
                                           class="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
                                            <i class="fas fa-external-link-alt mr-2"></i>
                                            View Full Incident Report
                                        </a>
                                    </div>
                                <?php endif; ?>
                            </div>
                        </div>
                    <?php endif; ?>

                    <?php if($resolvedIncident): ?>
                        <div class="border-t pt-4">
                            <h4 class="text-lg font-semibold text-gray-900 mb-3">Incident Report</h4>
                            <div class="bg-gray-50 border border-gray-200 rounded-lg p-4">
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <div class="text-xs text-gray-500">Incident Code</div>
                                        <div class="text-sm font-semibold text-gray-900"><?php echo e($resolvedIncident->incident_code); ?></div>
                                    </div>
                                    <div>
                                        <?php
                                            $perInstanceSeverity = $resolvedIncident->severity ?? null;
                                            if (is_array($resolvedIncident->equipment_instances ?? null) && is_array($resolvedIncident->equipment_severities ?? null)) {
                                                $idx = array_search($stolenLostEquipment->equipment_instance_id, $resolvedIncident->equipment_instances);
                                                if ($idx !== false && isset($resolvedIncident->equipment_severities[$idx])) {
                                                    $perInstanceSeverity = $resolvedIncident->equipment_severities[$idx];
                                                }
                                            }
                                            $sev = strtolower((string) $perInstanceSeverity);
                                            $sevColor = $sev === 'lost' ? 'red' : ($sev === 'damaged' ? 'orange' : ($sev === 'needs_repair' ? 'yellow' : 'gray'));
                                        ?>
                                        <div class="text-xs text-gray-500">Severity</div>
                                        <span class="inline-flex px-2 py-1 rounded-full text-xs font-semibold bg-<?php echo e($sevColor); ?>-100 text-<?php echo e($sevColor); ?>-800"><?php echo e(ucfirst(str_replace('_',' ', $perInstanceSeverity))); ?></span>
                                    </div>
                                </div>

                                <?php if($resolvedIncident->description): ?>
                                    <p class="text-sm text-gray-700 mt-3"><?php echo e($resolvedIncident->description); ?></p>
                                <?php endif; ?>

                                <?php if(is_array($resolvedIncident->attachments) && count($resolvedIncident->attachments) > 0): ?>
                                    <div class="mt-3 grid grid-cols-1 md:grid-cols-3 gap-3">
                                        <?php $__currentLoopData = $resolvedIncident->attachments; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $att): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                            <div class="border border-gray-200 rounded p-2 text-sm">
                                                <div class="font-medium text-gray-800 truncate"><?php echo e($att['filename'] ?? 'Attachment'); ?></div>
                                                <?php if(isset($att['path']) && str_starts_with($att['mime_type'] ?? '', 'image/')): ?>
                                                    <img src="/<?php echo e(ltrim($att['path'],'/')); ?>" class="mt-2 w-full h-24 object-cover rounded" />
                                                <?php endif; ?>
                                            </div>
                                        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                    </div>
                                <?php endif; ?>

                                <?php
                                    $instancesRaw = $resolvedIncident->equipment_instances ?? [];
                                    $instanceIds = is_array($instancesRaw) ? $instancesRaw : (is_string($instancesRaw) ? (json_decode($instancesRaw, true) ?: []) : []);
                                    $sevRaw = $resolvedIncident->equipment_severities ?? [];
                                    $sevMap = is_array($sevRaw) ? $sevRaw : (is_string($sevRaw) ? (json_decode($sevRaw, true) ?: []) : []);
                                ?>
                                <?php if(!empty($instanceIds)): ?>
                                    <div class="mt-4">
                                        <label class="block text-sm font-medium text-gray-700 mb-2">Equipment Instances in this Incident</label>
                                        <div class="overflow-hidden border border-gray-200 rounded">
                                            <table class="min-w-full divide-y divide-gray-200 text-xs">
                                                <thead class="bg-gray-50">
                                                    <tr>
                                                        <th class="px-3 py-2 text-left font-semibold text-gray-700">Instance Code</th>
                                                        <th class="px-3 py-2 text-left font-semibold text-gray-700">Reported Severity</th>
                                                    </tr>
                                                </thead>
                                                <tbody class="divide-y divide-gray-100">
                                                    <?php $__currentLoopData = $instanceIds; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $iid): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                                        <?php
                                                            $inst = \App\Models\EquipmentInstance::find($iid);
                                                            $sevVal = $sevMap[$iid] ?? ($sevMap[(string)$iid] ?? ($resolvedIncident->severity ?? 'unknown'));
                                                            $sev = strtolower((string)$sevVal);
                                                            $sevColor = $sev === 'lost' ? 'red' : ($sev === 'damaged' ? 'orange' : ($sev === 'needs_repair' ? 'yellow' : 'gray'));
                                                            $isCurrent = (int)$iid === (int)$stolenLostEquipment->equipment_instance_id;
                                                        ?>
                                                        <?php if($inst): ?>
                                                            <tr class="<?php if($isCurrent): ?> bg-red-50 <?php endif; ?>">
                                                                <td class="px-3 py-2 whitespace-nowrap font-medium text-gray-900"><?php echo e($inst->instance_code); ?></td>
                                                                <td class="px-3 py-2">
                                                                    <span class="inline-flex px-2 py-0.5 rounded-full text-[11px] font-semibold bg-<?php echo e($sevColor); ?>-100 text-<?php echo e($sevColor); ?>-800"><?php echo e(ucfirst(str_replace('_',' ', $sevVal))); ?></span>
                                                                    <?php if($isCurrent): ?>
                                                                        <span class="ml-2 text-[11px] text-red-700 font-semibold">(This instance)</span>
                                                                    <?php endif; ?>
                                                                </td>
                                                            </tr>
                                                        <?php endif; ?>
                                                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                <?php endif; ?>

                                <div class="mt-4">
                                    <a href="<?php echo e(route('instructor.incidents.show', $resolvedIncident)); ?>" class="inline-flex items-center px-3 py-2 bg-red-600 text-white text-xs font-semibold rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
                                        <i class="fas fa-external-link-alt mr-2"></i>
                                        View Full Incident
                                    </a>
                                </div>
                            </div>
                        </div>
                    <?php endif; ?>
                </div>
            </div>
        </div>
    </div>
 <?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginal9ac128a9029c0e4701924bd2d73d7f54)): ?>
<?php $attributes = $__attributesOriginal9ac128a9029c0e4701924bd2d73d7f54; ?>
<?php unset($__attributesOriginal9ac128a9029c0e4701924bd2d73d7f54); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal9ac128a9029c0e4701924bd2d73d7f54)): ?>
<?php $component = $__componentOriginal9ac128a9029c0e4701924bd2d73d7f54; ?>
<?php unset($__componentOriginal9ac128a9029c0e4701924bd2d73d7f54); ?>
<?php endif; ?>
<?php /**PATH C:\SEMSv25\SEMS\resources\views\manager\missing-equipment\show.blade.php ENDPATH**/ ?>