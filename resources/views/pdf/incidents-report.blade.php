<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>{{ $title }}</title>
    <style>
        body { font-family: Arial, sans-serif; font-size: 12px; color: #333; }
        .header { text-align: center; margin-bottom: 20px; border-bottom: 2px solid #333; padding-bottom: 10px; }
        .header img { max-width: 80px; height: auto; margin-bottom: 10px; }
        .header h1 { margin: 0; font-size: 22px; }
        .filters { margin-bottom: 16px; background: #f8f9fa; padding: 10px; border-radius: 6px; }
        .filters h3 { margin: 0 0 6px 0; font-size: 14px; }
        table { width: 100%; border-collapse: collapse; }
        th, td { border: 1px solid #ddd; padding: 6px 8px; text-align: left; font-size: 10px; }
        th { background: #f2f2f2; }
        .badge { padding: 2px 6px; border-radius: 10px; font-weight: bold; }
        .status-reported { background: #e5f0ff; }
        .status-investigating { background: #fff7cc; }
        .status-resolved { background: #d4edda; }
        .sev-critical { background: #f8d7da; }
        .sev-high { background: #ffe5cc; }
        .sev-medium { background: #fff7cc; }
        .sev-low { background: #e6ffed; }
        .footer { margin-top: 18px; text-align: center; font-size: 10px; color: #666; border-top: 1px solid #ddd; padding-top: 8px; }
    </style>
    </head>
<body>
    <div class="header">
        <img src="{{ public_path('images/UB_logo2.png') }}" alt="University of Baguio Logo">
        <h1>{{ $title }}</h1>
        <p>University of Baguio - Physical Education Office</p>
        <p>Generated on: {{ $generated_at }}</p>
    </div>

    @if(!empty($filters))
    <div class="filters">
        <h3>Applied Filters</h3>
        <p><strong>Date From:</strong> {{ $filters['date_from'] ?? '' }} &nbsp; <strong>Date To:</strong> {{ $filters['date_to'] ?? '' }}</p>
        @if(!empty($filters['owner']))<p><strong>Owner:</strong> {{ $filters['owner'] }}</p>@endif
    </div>
    @endif

    @foreach($incidents as $incident)
        <table>
            <thead>
                <tr>
                    <th colspan="4">Incident: {{ $incident->incident_code }}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>Reported</strong></td>
                    <td colspan="3">{{ $incident->created_at->format('M d, Y \a\t g:i A') }}</td>
                </tr>
                <tr>
                    <td><strong>Type</strong></td>
                    <td colspan="3">{{ ucfirst(str_replace('_',' ', $incident->incident_type)) }}</td>
                </tr>
                <tr>
                    <td><strong>Reservation</strong></td>
                    <td colspan="3">{{ optional($incident->reservation)->reservation_code }}</td>
                </tr>
                <tr>
                    <td><strong>Description</strong></td>
                    <td colspan="3">{{ $incident->description }}</td>
                </tr>
                <tr>
                    <td><strong>Status</strong></td>
                    <td colspan="3">{{ ucfirst($incident->status) }}</td>
                </tr>
                @if($incident->student_name || $incident->student_involvement)
                <tr>
                    <td><strong>Student</strong></td>
                    <td>{{ $incident->student_name ?? 'N/A' }}</td>
                    <td><strong>Email / ID</strong></td>
                    <td>{{ $incident->student_email ?? '' }} {{ $incident->student_id ? '(' . $incident->student_id . ')' : '' }}</td>
                </tr>
                <tr>
                    <td><strong>Involvement</strong></td>
                    <td colspan="3">{{ $incident->student_involvement ?? 'N/A' }}</td>
                </tr>
                @endif
                @php
                    $instancesRaw = $incident->equipment_instances;
                    $instances = is_array($instancesRaw) ? $instancesRaw : (is_string($instancesRaw) ? (json_decode($instancesRaw, true) ?: []) : []);
                    $sevRaw = $incident->equipment_severities;
                    $sevMap = is_array($sevRaw) ? $sevRaw : (is_string($sevRaw) ? (json_decode($sevRaw, true) ?: []) : []);
                @endphp
                @if(!empty($instances))
                <tr>
                    <td colspan="4"><strong>Equipment Instances</strong></td>
                </tr>
                <tr>
                    <th style="background:#f2f2f2">Equipment (Brand / Model)</th>
                    <th style="background:#f2f2f2">Instance</th>
                    <th style="background:#f2f2f2">Severity</th>
                    <th style="background:#f2f2f2"></th>
                </tr>
                @foreach($instances as $instId)
                    @php 
                        $inst = \App\Models\EquipmentInstance::find($instId);
                        $eq = $inst?->equipment;
                    @endphp
                    @if($inst)
                    <tr>
                        <td>{{ ($eq->brand ?? '') }} {{ ($eq->model ?? '') }}</td>
                        <td>{{ $inst->instance_code }}</td>
                        <td>{{ ucfirst(str_replace('_',' ', $sevMap[$instId] ?? 'unknown')) }}</td>
                        <td></td>
                    </tr>
                    @endif
                @endforeach
                @elseif($incident->equipmentInstance)
                <tr>
                    <td colspan="4"><strong>Equipment Instance</strong></td>
                </tr>
                <tr>
                    <th style="background:#f2f2f2">Equipment (Brand / Model)</th>
                    <th style="background:#f2f2f2">Instance</th>
                    <th style="background:#f2f2f2">Severity</th>
                    <th style="background:#f2f2f2"></th>
                </tr>
                <tr>
                    @php $eq = $incident->equipmentInstance->equipment ?? null; @endphp
                    <td>{{ ($eq->brand ?? '') }} {{ ($eq->model ?? '') }}</td>
                    <td>{{ $incident->equipmentInstance->instance_code }}</td>
                    <td>{{ ucfirst(str_replace('_',' ', $incident->severity)) }}</td>
                    <td></td>
                </tr>
                @endif

                <tr>
                    <td colspan="4"><strong>Student Involvement</strong></td>
                </tr>
                <tr>
                    <th style="background:#f2f2f2">Student Name</th>
                    <th style="background:#f2f2f2">Email</th>
                    <th style="background:#f2f2f2">Student ID</th>
                    <th style="background:#f2f2f2">Details</th>
                </tr>
                <tr>
                    <td>{{ $incident->student_name ?? 'N/A' }}</td>
                    <td>{{ $incident->student_email ?? 'N/A' }}</td>
                    <td>{{ $incident->student_id ?? 'N/A' }}</td>
                    <td>{{ $incident->student_involvement ?? 'N/A' }}</td>
                </tr>
            </tbody>
        </table>
    @endforeach

    <div class="footer">
        <p>Total Records: {{ $incidents->count() }}</p>
        <p>This report was generated automatically by the SEMS system.</p>
    </div>
</body>
</html>


