<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class hobby extends Model
{
    public $timestamps = false;
    use HasFactory;
    protected $visible = ['name', 'description'];
    protected $fillable = ["name", "description"];
    public function profiles(): BelongsToMany
    {
        return $this->belongsToMany(Profile::class);
    }
}
